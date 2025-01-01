import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FavoriteComponent } from '../../components/favorite/favorite.component';
import { TwitterPipe } from '../../utils/twitter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    TwitterPipe,
    FavoriteComponent,
    FormsModule,
  ],
  templateUrl: './team-list.page.html',
  styleUrl: './team-list.page.css',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TeamListPage {
  liked = true;
  @ViewChild(FavoriteComponent) favorite!: FavoriteComponent;
  team = {
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
