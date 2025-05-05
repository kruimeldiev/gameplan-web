import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { HeroChartComponent } from './hero-chart/hero-chart.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavBarComponent, AboutComponent, HeroChartComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
