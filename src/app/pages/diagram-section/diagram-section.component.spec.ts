import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramSectionComponent } from './diagram-section.component';

describe('DiagramSectionComponent', () => {
  let component: DiagramSectionComponent;
  let fixture: ComponentFixture<DiagramSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
