import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestValidateComponent } from './my-request-validate.component';

describe('MyRequestValidateComponent', () => {
  let component: MyRequestValidateComponent;
  let fixture: ComponentFixture<MyRequestValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
