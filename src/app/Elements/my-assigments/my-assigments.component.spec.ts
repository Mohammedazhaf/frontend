import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssigmentsComponent } from './my-assigments.component';

describe('MyAssigmentsComponent', () => {
  let component: MyAssigmentsComponent;
  let fixture: ComponentFixture<MyAssigmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAssigmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAssigmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
