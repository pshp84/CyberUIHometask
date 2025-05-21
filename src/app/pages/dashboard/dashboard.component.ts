import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RiskSummaryComponent } from '../risk-summary/risk-summary.component';
import { DescriptionComponent } from '../description/description.component';
import { DiagramSectionComponent } from '../diagram-section/diagram-section.component';
import { RemediationTechniqueSectionComponent } from '../remediation-technique-section/remediation-technique-section.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RiskSummaryComponent, DescriptionComponent, DiagramSectionComponent, RemediationTechniqueSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
