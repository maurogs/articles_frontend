import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticlesService } from '@features/articles/services';
import { ApiResponse, Article } from '@features/articles/models';
import { PaginationComponent } from '@shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent],
  templateUrl: './article-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent implements OnInit {
  private readonly articlesService = inject(ArticlesService);

  articles = signal<Article[]>([]);
  metadata = signal<ApiResponse<Article>['meta'] | null>(null);
  currentPage = signal(1);

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(page = 1): void {
    this.articlesService.getArticles(page).subscribe({
      next: (response) => {
        this.articles.set(response.data);
        this.metadata.set(response.meta);
        this.currentPage.set(page);
      },
      error: (err) => console.error('Error cargando artículos', err),
    });
  }

  goToPage(page: number): void {
    const meta = this.metadata();
    if (meta && page >= 1 && page <= meta.total_pages) {
      this.loadArticles(page);
    }
  }
}
