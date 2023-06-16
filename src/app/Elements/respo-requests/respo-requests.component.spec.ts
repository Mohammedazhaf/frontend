import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoRequestsComponent } from './respo-requests.component';

describe('RespoRequestsComponent', () => {
  let component: RespoRequestsComponent;
  let fixture: ComponentFixture<RespoRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
