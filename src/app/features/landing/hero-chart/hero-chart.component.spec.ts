import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChartComponent } from './hero-chart.component';

describe('HeroChartComponent', () => {
  let component: HeroChartComponent;
  let fixture: ComponentFixture<HeroChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
