import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  serverCard1: boolean = false;
  serverCard2: boolean = false;
  serverCard3: boolean = false;


  ngOnInit(): void {
    const coursesData = {
      labels: ['Critical', 'High', 'Medium', 'Low'],
      datasets: [
        {
          data: [2, 1, 1, 1],
          backgroundColor: ['#f87979', '#a1c45a', '#5bc0de', '#ffcd56'],
        },
      ],
    };

    const config: any = {
      type: 'doughnut',
      data: coursesData,
      options: {
        responsive: true,
        cutout: '85%',
        plugins: {
          legend: {
            display: false,
            position: 'left',
            align: 'center',
            labels: {
              boxWidth: 10,
              boxHeight: 10,
              useBorderRadius: true,
              borderRadius: 20,
              font: {
                size: 16,
                weight: 'bold',
              },
              generateLabels: function (chart: any) {
                const data = chart.data;
                return data.labels.map((label: any, i: number) => {
                  const value = data.datasets[0].data[i];
                  const backgroundColor = data.datasets[0].backgroundColor[i];
                  return {
                    text: `${value} ${label}`,
                    fillStyle: backgroundColor,
                    strokeStyle: backgroundColor,
                    index: i,
                  };
                });
              },
            },
          },
        },
      },
    };

    const ctx = (
      document.getElementById('coursesDoughnutChart') as HTMLCanvasElement
    ).getContext('2d');
    new Chart(ctx!, config);
  }

  openServerCard1(): void {
    this.serverCard1 = !this.serverCard1;
  }

  openServerCard2(): void {
    this.serverCard2 = !this.serverCard2;
  }

  openServerCard3(): void {
    this.serverCard3 = !this.serverCard3;
  }
}
