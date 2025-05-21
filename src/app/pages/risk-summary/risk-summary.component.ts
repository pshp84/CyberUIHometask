import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RiskData } from './data/types';
import { MOCK_RISK_DATA } from './data/data';

const RISK_SUMMARY_CONFIG = {
  PAGE_SIZE: 2,
  PAGE_NUMBER: 1,
  ONE: 1
};

@Component({
  selector: 'app-risk-summary',
  imports: [CommonModule],
  templateUrl: './risk-summary.component.html',
  styleUrl: './risk-summary.component.scss'
})
export class RiskSummaryComponent {
  data: RiskData[] = MOCK_RISK_DATA;

  pageSize = RISK_SUMMARY_CONFIG.PAGE_SIZE;
  currentPage = RISK_SUMMARY_CONFIG.PAGE_NUMBER;

  get totalItems(): number {
    return this.data.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get currentPageStart(): number {
    return (this.currentPage - RISK_SUMMARY_CONFIG.ONE) * this.pageSize + RISK_SUMMARY_CONFIG.ONE;
  }

  get currentPageEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }

  get paginatedData() {
    const start = (this.currentPage - RISK_SUMMARY_CONFIG.ONE) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  prevPage() {
    if (this.currentPage > RISK_SUMMARY_CONFIG.ONE) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  get riskCount() {
    return {
      critical: this.data.filter(d => d.risk === 'Critical').length,
      high: this.data.filter(d => d.risk === 'High').length,
      medium: this.data.filter(d => d.risk === 'Medium').length,
      low: this.data.filter(d => d.risk === 'Low').length,
    };
  }
}
