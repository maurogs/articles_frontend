import { Routes } from '@angular/router';
import { ArticleListComponent } from '@features/articles/pages/article-list/article-list.component';
import { ArticleCreateComponent } from '@features/articles/pages/article-create/article-create.component';

export const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/new', component: ArticleCreateComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];
