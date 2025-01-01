import {
  CurrencyPipe,
  DatePipe,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwitterPipe } from './utils/twitter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, CurrencyPipe, TwitterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-team';

  response: Response = { status: 'resolved', data: 'Donnees recues' };
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
  liked: boolean = true;

  toggle() {
    this.liked = !this.liked;
  }

  onClick(link: HTMLAnchorElement) {
    console.log('onClick', link);
  }
}

// Discriminated union

export type Response =
  | { status: 'resolved'; data: string }
  | { status: 'error'; message: string };
