import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestUpdateComponent } from './my-request-update.component';

describe('MyRequestUpdateComponent', () => {
  let component: MyRequestUpdateComponent;
  let fixture: ComponentFixture<MyRequestUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
