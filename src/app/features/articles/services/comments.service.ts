import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Comment } from '@features/articles/models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly apiUrl = `${environment.apiUrl}`;
  private readonly http = inject(HttpClient);

  createComment(articleId: string, authorName: string, body: string): Observable<Comment> {
    const payload = {
      comment: {
        author_name: authorName,
        body: body,
        article_id: articleId,
      },
    };
    return this.http.post<Comment>(`${this.apiUrl}/comments`, payload);
  }
}
