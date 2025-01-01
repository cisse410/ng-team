import { Component, model, output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  // @Input({ required: true }) liked!: boolean;
  // @Output() likedChange = new EventEmitter<boolean>();
  liked = model<boolean>();
  likedChange = output<boolean>();

  toggle() {
    this.liked.update((value) => !value);
  }
}
