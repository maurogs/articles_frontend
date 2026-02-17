import { Routes } from '@angular/router';
import { ArticleListComponent } from '@features/articles/pages/article-list/article-list.component';
import { ArticleCreateComponent } from '@features/articles/pages/article-create/article-create.component';
import { ArticleCommentsComponent } from '@features/articles/pages/article-comments/article-comments.component';
import { CommentCreateComponent } from '@features/articles/pages/comment-create/comment-create.component';
import { OverviewComponent } from '@features/dashboard/pages/overview/overview.component';

export const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/new', component: ArticleCreateComponent },
  { path: 'articles/:id/comments', component: ArticleCommentsComponent },
  { path: 'articles/:id/add-comment', component: CommentCreateComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];
