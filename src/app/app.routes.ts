import { Routes } from '@angular/router';
import { ArticleListComponent } from '@features/articles/pages/article-list/article-list.component';

export const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];
