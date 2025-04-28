import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// This is the main component of the Angular application.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gameplan_web';
}
