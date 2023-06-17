import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestPageComponent } from './add-request-page.component';

describe('AddRequestPageComponent', () => {
  let component: AddRequestPageComponent;
  let fixture: ComponentFixture<AddRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequestPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
