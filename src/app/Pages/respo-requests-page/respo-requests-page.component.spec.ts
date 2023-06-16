import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoRequestsPageComponent } from './respo-requests-page.component';

describe('RespoRequestsPageComponent', () => {
  let component: RespoRequestsPageComponent;
  let fixture: ComponentFixture<RespoRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoRequestsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
