import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssignmentsComponent } from './request-assignments.component';

describe('RequestAssignmentsComponent', () => {
  let component: RequestAssignmentsComponent;
  let fixture: ComponentFixture<RequestAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
