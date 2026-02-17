import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentsService } from '@features/articles/services';
import { capitalizeWords } from '@shared/utils/string.utils';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './comment-create.component.html',
})
export class CommentCreateComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private commentsService = inject(CommentsService);

  commentForm: FormGroup;
  articleId = signal<number>(0);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleId.set(id);

    this.commentForm = this.fb.group({
      authorName: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const { authorName, body } = this.commentForm.value;

      this.commentsService
        .createComment(this.articleId().toString(), capitalizeWords(authorName), body)
        .subscribe(() => {
          this.router.navigate(['/articles', this.articleId(), 'comments']);
        });
    }
  }
}
