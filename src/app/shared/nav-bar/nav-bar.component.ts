import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GhostButtonComponent } from '../buttons/ghost-button/ghost-button.component';
import { PrimaryButtonComponent } from '../buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-nav-bar',
  imports: [GhostButtonComponent, PrimaryButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToSignUp(): void {
    this.router.navigate(['/signup']);
  }
}
