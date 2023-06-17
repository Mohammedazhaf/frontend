import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeListPageComponent } from './emplyee-list-page.component';

describe('EmplyeeListPageComponent', () => {
  let component: EmplyeeListPageComponent;
  let fixture: ComponentFixture<EmplyeeListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeeListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
