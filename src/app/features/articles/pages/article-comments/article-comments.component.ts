import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticlesService } from '@features/articles/services/articles.service';
import { ApiResponse } from '@features/articles/models/article.model';
import { Comment } from '@features/articles/models/comment.model';
import { PaginationComponent } from '@shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-article-comments',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent],
  templateUrl: './article-comments.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCommentsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private articlesService = inject(ArticlesService);

  articleId = signal<string | null>(null);
  articleTitle = signal<string>('');
  comments = signal<Comment[]>([]);
  metadata = signal<ApiResponse<Comment>['meta'] | null>(null);
  currentPage = signal(1);

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { articleTitle: string };

    if (state && state.articleTitle) {
      this.articleTitle.set(state.articleTitle);
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleId.set(id);
      this.loadComments(id, 1);
    }
  }

  loadComments(id: string, page: number): void {
    this.articlesService.getArticleComments(id, page).subscribe((response) => {
      this.comments.set(response.data);
      this.metadata.set(response.meta);
      this.currentPage.set(page);
    });
  }

  goToPage(page: number): void {
    const currentMetadata = this.metadata();
    const id = this.articleId();

    if (id && currentMetadata && page >= 1 && page <= currentMetadata.total_pages) {
      this.loadComments(id, page);
    }
  }
}
