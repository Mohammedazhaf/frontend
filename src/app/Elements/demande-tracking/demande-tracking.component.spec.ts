import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeTrackingComponent } from './demande-tracking.component';

describe('DemandeTrackingComponent', () => {
  let component: DemandeTrackingComponent;
  let fixture: ComponentFixture<DemandeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
