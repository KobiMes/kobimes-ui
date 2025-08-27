import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const Chart: any;

@Component({
  selector: 'app-bigpanel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biganel.html',
  styleUrls: ['./biganel.scss']
})
export class BigPanelCharts implements AfterViewInit {
  
  @ViewChild('statusChart', { static: false }) statusChartRef!: ElementRef<HTMLCanvasElement>;
  private chart: any;

  // 📌 Burada artık sabit datayı giriyoruz
  counts = { running: 10, maintenance: 5, down: 2 };

  ngAfterViewInit(): void {
    this.drawChart();
  }
  months = [
  'January ', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

selectedMonth = 'July';
selectedYear = 2025;

onMonthChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.selectedMonth = value;
  console.log('Seçilen:', this.selectedMonth, this.selectedYear);
  // 🔹 burada grafiği yeniden filtreleyebilirsin
}

  private drawChart() {
    const ctx = this.statusChartRef?.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Çalışıyor', 'Bakımda', 'Arızalı'],
        datasets: [{
          data: [this.counts.running, this.counts.maintenance, this.counts.down],
          backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'], // Yeşil, Sarı, Kırmızı
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '55%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (c: any) => `${c.label}: ${c.parsed}`
            }
          }
        }
      }
    });
  }
}
