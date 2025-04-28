import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

// This module is responsible for the landing page of the application.
@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule],
  exports: [LandingComponent]
})
export class LandingModule {}