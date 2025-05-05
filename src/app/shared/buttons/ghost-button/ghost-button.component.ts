import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ghost-button',
  templateUrl: './ghost-button.component.html',
  styleUrls: ['./ghost-button.component.scss']
})
export class GhostButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
}
