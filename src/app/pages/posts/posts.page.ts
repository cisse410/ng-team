import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './posts.page.html',
  styleUrl: './posts.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class PostsPage {
  postService = inject(PostService);
  posts$ = this.postService.getPosts();
  $posts = toSignal(this.posts$, { initialValue: [] });
}
