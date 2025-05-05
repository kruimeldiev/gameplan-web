import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-hero-chart',
  templateUrl: './hero-chart.component.html',
  styleUrls: ['./hero-chart.component.scss']
})
export class HeroChartComponent implements OnInit {
  @ViewChild('playerChart', { static: true }) chartCanvas!: ElementRef;
  
  players = [
    { name: 'Messi', color: 'rgba(255, 99, 132, 0.7)' },
    { name: 'Ronaldo', color: 'rgba(54, 162, 235, 0.7)' },
    { name: 'Lewandowski', color: 'rgba(255, 206, 86, 0.7)' },
    { name: 'Salah', color: 'rgba(75, 192, 192, 0.7)' },
    { name: 'Mbappé', color: 'rgba(153, 102, 255, 0.7)' },
    { name: 'Haaland', color: 'rgba(255, 159, 64, 0.7)' }
  ];
  
  maxMatches = 6;
  matchInterval = 2;
  
  ngOnInit(): void {
    this.createChart();
  }
  
  // This function creates the chart using Chart.js
  // It generates random data for each player and sets up the chart options
  createChart(): void {
    const datasets = this.players.map(player => {
      const data = Array.from({ length: this.maxMatches }, (_, i) => {
        return Math.floor(Math.random() * 3);
      });
      
      // Create cumulative goals data
      const cumulativeData = data.reduce((acc: number[], val: number, i: number) => {
        const prev = i > 0 ? acc[i - 1] : 0;
        acc.push(prev + val);
        return acc;
      }, []);
      
      return {
        label: player.name,
        data: cumulativeData,
        fill: false,
        borderColor: player.color,
        tension: 0.4,
        pointRadius: 0,
      };
    });
    
    new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: Array.from({ length: this.maxMatches }, (_, i) => `Game ${(i + 1) * this.matchInterval}`),
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            
          },
          tooltip: {
            enabled: false,
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Goals',
              font: {
                family: 'IBM Plex Sans", sans-serif',
                size: 12
              }
            },
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              font: {
                size: 10
              }
            }
          }
        }
      }
    });
  }
}
