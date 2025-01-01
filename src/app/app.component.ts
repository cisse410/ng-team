import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
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

  constructor() {
    const observable$ = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      setTimeout(() => {
        subscriber.next(4);
      }, 5000);
    });

    const observer: Observer<number> = {
      next: (value) => console.log(`Next ${value}`),
      error: (err) => console.log(`Error ${err}`),
      complete: () => console.log(`Completed`),
    };
    const subscription: Subscription = observable$.subscribe(observer);

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000);
    fromEvent(document, 'click').subscribe(console.log);
  }

  response: Response = { status: 'resolved', data: 'Donnees recues' };
}

// Discriminated union

export type Response =
  | { status: 'resolved'; data: string }
  | { status: 'error'; message: string };
