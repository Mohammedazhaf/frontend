import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespoViewRequestComponent } from './respo-view-request.component';

describe('RespoViewRequestComponent', () => {
  let component: RespoViewRequestComponent;
  let fixture: ComponentFixture<RespoViewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespoViewRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespoViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
