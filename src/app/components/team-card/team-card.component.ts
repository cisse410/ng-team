import { Component, computed, input } from '@angular/core';
import { Team } from '../../models/team';
import { TwitterPipe } from '../../utils/twitter.pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FavoriteComponent } from '../favorite/favorite.component';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, TwitterPipe, FavoriteComponent],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css',
})
export class TeamCardComponent {
  team = input.required<Team>();
  liked = true;
  wins = computed(() => this.team().champions.length);
}
