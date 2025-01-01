import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from '../../components/favorite/favorite.component';
import { TeamCardComponent } from '../../components/team-card/team-card.component';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [FormsModule, TeamCardComponent],
  templateUrl: './team-list.page.html',
  styleUrl: './team-list.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TeamListPage {
  liked = true;
  @ViewChild(FavoriteComponent) favorite!: FavoriteComponent;
  team: Team = {
    id: 'fc-barcelona',
    name: 'FC Barcelone',
    country: '🇪🇸',
    foundedAt: '1899-11-29',
    coach: 'Xavi Hernandez',
    budget: 606000000,
    imageURL: 'assets/fc-barcelona.jpg',
    twitter: 'FCBarcelona',
    champions: [1992, 2006, 2009, 2011, 2015],
  };
  // onLikeChange(value: boolean) {
  //   this.liked = value;
  // }

  onAction() {
    console.log(this.favorite);
  }
}
