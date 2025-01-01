import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = signal('ng-team');

  response: Response = { status: 'resolved', data: 'Donnees recues' };
}

// Discriminated union

export type Response =
  | { status: 'resolved'; data: string }
  | { status: 'error'; message: string };
