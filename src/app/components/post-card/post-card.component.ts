import { Component, input, inject } from '@angular/core';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  post = input.required<Post>();
  router = inject(Router);
  
  navigateToDetails() {
    const postId = this.post().id;
    this.router.navigate(['/posts', postId]);
  }
}
