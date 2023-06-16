import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestUpdatesComponent } from './my-request-updates.component';

describe('MyRequestUpdatesComponent', () => {
  let component: MyRequestUpdatesComponent;
  let fixture: ComponentFixture<MyRequestUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
