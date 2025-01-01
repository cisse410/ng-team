import { Routes } from '@angular/router';
import { PostsPage } from './pages/posts/posts.page';
import { PostDetailsPage } from './pages/post-details/post-details.page';
import { inject } from '@angular/core';
import { PostService } from './services/post.service';
import { map } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    component: PostsPage,
    title: 'Liste des articles',
  },
  {
    path: 'posts',
    component: PostsPage,
    title: 'Liste des articles',
  },
  {
    path: 'posts/:id',
    component: PostDetailsPage,
    title: (route) => {
      const id = route.paramMap.get('id')!;
      const team$ = inject(PostService).getPost(id);
      return team$.pipe(map((post) => post.title));
    },
  },
];
