import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  @Input({ required: true }) liked!: boolean;
  @Output() likedChange = new EventEmitter<boolean>();

  toggle() {
    this.liked = !this.liked;
    this.likedChange.emit(this.liked);
  }
}
