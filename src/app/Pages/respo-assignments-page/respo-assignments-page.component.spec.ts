import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoAssignmentsPageComponent } from './respo-assignments-page.component';

describe('RespoAssignmentsPageComponent', () => {
  let component: RespoAssignmentsPageComponent;
  let fixture: ComponentFixture<RespoAssignmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoAssignmentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoAssignmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
