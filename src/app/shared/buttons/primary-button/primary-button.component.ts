import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  // @Input() onClick: () => void = () => {};

  // handleClick() {
  //   if (!this.disabled && this.onClick) {
  //     this.onClick();
  //   }
  // }
}
