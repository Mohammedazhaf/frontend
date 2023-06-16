import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoRequestTrackingComponent } from './respo-request-tracking.component';

describe('RespoRequestTrackingComponent', () => {
  let component: RespoRequestTrackingComponent;
  let fixture: ComponentFixture<RespoRequestTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoRequestTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoRequestTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
