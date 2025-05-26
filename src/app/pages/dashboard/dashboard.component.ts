import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { RiskData } from './data/types';
import { RISK_LIST } from './data/data';

const CONFIG = {
  CURRENT_PAGE: 1,
  ITEM_PER_PAGE: 2,
  ONE: 1,
};

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
  fullRiskList: RiskData[] = RISK_LIST;
  riskList: RiskData[] = [];

  currentPage: number = CONFIG.CURRENT_PAGE;
  itemsPerPage: number = CONFIG.ITEM_PER_PAGE;

  get totalItems(): number {
    return this.fullRiskList.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  ngOnInit(): void {
    this.updateRiskList();
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

  updateRiskList(): void {
    const start = (this.currentPage - CONFIG.ONE) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.riskList = this.fullRiskList.slice(start, end);
  }

  goToPrevious(): void {
    if (this.currentPage > CONFIG.ONE) {
      this.currentPage--;
      this.updateRiskList();
    }
  }

  goToNext(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateRiskList();
    }
  }

  getPaginationText(): string {
    const start =
      (this.currentPage - CONFIG.ONE) * this.itemsPerPage + CONFIG.ONE;
    const end = Math.min(
      start + this.itemsPerPage - CONFIG.ONE,
      this.totalItems
    );
    return `Showing ${start}-${end} of ${this.totalItems}`;
  }
  handlePaginationKeydown(
    event: KeyboardEvent,
    direction: 'prev' | 'next'
  ): void {
    if (event.key === 'Enter' || event.key === ' ') {
      // Support Enter and Space
      direction === 'prev' ? this.goToPrevious() : this.goToNext();
      event.preventDefault();
    } else if (event.key === 'ArrowLeft' && direction === 'prev') {
      this.goToPrevious();
      event.preventDefault();
    } else if (event.key === 'ArrowRight' && direction === 'next') {
      this.goToNext();
      event.preventDefault();
    }
  }
}
