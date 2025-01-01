import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './post-details.page.html',
  styleUrl: './post-details.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class PostDetailsPage {
  route = inject(ActivatedRoute);
  postService = inject(PostService);
  id = this.route.snapshot.paramMap.get('id')!;

  post$ = this.postService.getPost(this.id);
  $post = toSignal(this.post$);
}
