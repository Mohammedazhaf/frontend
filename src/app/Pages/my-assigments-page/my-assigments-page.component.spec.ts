import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssigmentsPageComponent } from './my-assigments-page.component';

describe('MyAssigmentsPageComponent', () => {
  let component: MyAssigmentsPageComponent;
  let fixture: ComponentFixture<MyAssigmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAssigmentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAssigmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
