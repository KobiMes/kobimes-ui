import { Component } from '@angular/core';

@Component({
  selector: 'app-panelgraph',
  imports: [],
  templateUrl: './panelgraph.html',
  styleUrl: './panelgraph.scss'
})
export class Panelgraph {
  selectedYear: number = 2024;

  // Mock data (Ocak - Aralık production cost)
  data2024 = [
    { month: 'January', cost: 4000 },
    { month: 'February', cost: 3000 },
    { month: 'March', cost: 5000 },
    { month: 'April', cost: 2500 },
    { month: 'May', cost: 3200 },
    { month: 'June', cost: 4500 },
    { month: 'July', cost: 3800 },
    { month: 'August', cost: 4200 },
    { month: 'September', cost: 3100 },
    { month: 'October', cost: 4900 },
    { month: 'November', cost: 5300 },
    { month: 'December', cost: 6000 },
  ];

  data2025 = [
    { month: 'January', cost: 5200 },
    { month: 'February', cost: 4100 },
    { month: 'March', cost: 4600 },
    { month: 'April', cost: 3000 },
    { month: 'May', cost: 3700 },
    { month: 'June', cost: 4900 },
    { month: 'July', cost: 4200 },
    { month: 'August', cost: 4700 },
    { month: 'September', cost: 3900 },
    { month: 'October', cost: 5500 },
    { month: 'November', cost: 5800 },
    { month: 'December', cost: 6400 },
  ];

  get chartData() {
    return this.selectedYear === 2025 ? this.data2025 : this.data2024;
  }

  years = [2024, 2025];

}
