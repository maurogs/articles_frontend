import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Article, ApiResponse } from '@features/articles/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private readonly http = inject(HttpClient);

  getArticles(page = 1): Observable<ApiResponse<Article[]>> {
    return this.http.get<ApiResponse<Article[]>>(`${this.apiUrl}/articles`, {
      params: {
        page: page.toString(),
        sort: 'created_at',
        order: 'desc',
      },
    });
  }

  createArticle(article: { title: string; body: string; authorName: string }): Observable<void> {
    const payload = {
      article: {
        title: article.title,
        body: article.body,
        author_name: article.authorName,
      },
    };
    return this.http.post<void>(`${this.apiUrl}/articles`, payload);
  }
}
