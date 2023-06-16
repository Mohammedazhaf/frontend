import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoDemandeTrackComponent } from './respo-demande-track.component';

describe('RespoDemandeTrackComponent', () => {
  let component: RespoDemandeTrackComponent;
  let fixture: ComponentFixture<RespoDemandeTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoDemandeTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoDemandeTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
