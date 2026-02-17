import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ArticlesService } from '@features/articles/services';
import { capitalizeWords, capitalizeFirstLetter } from '@shared/utils/string.utils';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './article-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateComponent {
  private readonly fb = inject(FormBuilder);
  private readonly articlesService = inject(ArticlesService);
  private readonly router = inject(Router);

  articleForm = this.fb.group({
    title: ['', [Validators.required]],
    authorName: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.articleForm.valid) {
      const rawValue = this.articleForm.getRawValue();

      this.articlesService
        .createArticle({
          title: capitalizeFirstLetter(rawValue.title as string),
          body: rawValue.body as string,
          authorName: capitalizeWords(rawValue.authorName as string),
        })
        .subscribe({
          next: () => {
            this.router.navigate(['/articles']);
          },
          error: (err) => console.error('Error when creating article', err),
        });
    }
  }
}
