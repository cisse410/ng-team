import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-team';

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

  onClick(link: HTMLAnchorElement) {
    console.log('onClick', link);
  }
}
