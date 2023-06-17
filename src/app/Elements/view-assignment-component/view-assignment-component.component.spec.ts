import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignmentComponentComponent } from './view-assignment-component.component';

describe('ViewAssignmentComponentComponent', () => {
  let component: ViewAssignmentComponentComponent;
  let fixture: ComponentFixture<ViewAssignmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssignmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAssignmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
