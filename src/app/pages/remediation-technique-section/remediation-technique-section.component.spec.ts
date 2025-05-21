import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationTechniqueSectionComponent } from './remediation-technique-section.component';

describe('RemediationTechniqueSectionComponent', () => {
  let component: RemediationTechniqueSectionComponent;
  let fixture: ComponentFixture<RemediationTechniqueSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationTechniqueSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationTechniqueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
