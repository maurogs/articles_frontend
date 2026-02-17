import { Routes } from '@angular/router';
import { ArticleListComponent } from '@features/articles/pages/article-list/article-list.component';
import { ArticleCreateComponent } from '@features/articles/pages/article-create/article-create.component';
import { ArticleCommentsComponent } from '@features/articles/pages/article-comments/article-comments.component';

export const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/new', component: ArticleCreateComponent },
  { path: 'articles/:id/comments', component: ArticleCommentsComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];
