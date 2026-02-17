import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Article } from '@features/articles/models';
import { ArticlesService, CommentsService } from '@features/articles/services';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  private articlesService = inject(ArticlesService);
  private commentsService = inject(CommentsService);

  totalArticles = signal(0);
  totalComments = signal(0);
  topArticles = signal<Article[]>([]);
  isLoading = signal(true);

  ngOnInit(): void {
    // Lanzamos las llamadas en paralelo
    forkJoin({
      comments: this.commentsService.getComments(),
      top: this.articlesService.getTopArticles(5),
    }).subscribe({
      next: (res) => {
        this.totalArticles.set(res.top.meta.total);
        this.totalComments.set(res.comments.meta.total);
        this.topArticles.set(res.top.data.slice(0, 5));
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error cargando estadísticas', err);
        this.isLoading.set(false);
      },
    });
  }
}
