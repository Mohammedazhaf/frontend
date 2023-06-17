import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRapportPageComponent } from './add-rapport-page.component';

describe('AddRapportPageComponent', () => {
  let component: AddRapportPageComponent;
  let fixture: ComponentFixture<AddRapportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRapportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRapportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
