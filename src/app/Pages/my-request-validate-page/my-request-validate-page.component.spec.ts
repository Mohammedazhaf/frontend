import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestValidatePageComponent } from './my-request-validate-page.component';

describe('MyRequestValidatePageComponent', () => {
  let component: MyRequestValidatePageComponent;
  let fixture: ComponentFixture<MyRequestValidatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestValidatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestValidatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
