import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoAssignmentsTableComponent } from './respo-assignments-table.component';

describe('RespoAssignmentsTableComponent', () => {
  let component: RespoAssignmentsTableComponent;
  let fixture: ComponentFixture<RespoAssignmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoAssignmentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoAssignmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
