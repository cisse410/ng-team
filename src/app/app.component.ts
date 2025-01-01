import { Component, computed, effect, signal } from '@angular/core';
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
  title = signal('ng-team');
  count = computed(() => this.title().length);

  // Deux possibilites de mettre a jour la valeur d'un signal
  constructor() {
    this.title.set('ng-teams');
    this.title.update((value) => value + ' change-with-update');
    effect(() => {
      console.log('Longeur du titre ' + this.count());
    });
    setTimeout(() => {
      this.title.set('ng-teams-teams');
    }, 2000);
  }

  response: Response = { status: 'resolved', data: 'Donnees recues' };

  onClick(link: HTMLAnchorElement) {
    console.log('onClick', link);
  }
}

// Discriminated union

export type Response =
  | { status: 'resolved'; data: string }
  | { status: 'error'; message: string };
