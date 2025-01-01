import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamListPage } from './pages/team-list/team-list.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamListPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-team';

  response: Response = { status: 'resolved', data: 'Donnees recues' };

  onClick(link: HTMLAnchorElement) {
    console.log('onClick', link);
  }
}

// Discriminated union

export type Response =
  | { status: 'resolved'; data: string }
  | { status: 'error'; message: string };
