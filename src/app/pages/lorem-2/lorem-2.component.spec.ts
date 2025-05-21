import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lorem2Component } from './lorem-2.component';

describe('Lorem2Component', () => {
  let component: Lorem2Component;
  let fixture: ComponentFixture<Lorem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lorem2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lorem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
