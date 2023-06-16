import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeTrackingPageComponent } from './demande-tracking-page.component';

describe('DemandeTrackingPageComponent', () => {
  let component: DemandeTrackingPageComponent;
  let fixture: ComponentFixture<DemandeTrackingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeTrackingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeTrackingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
