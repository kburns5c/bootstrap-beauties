import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDashComponent } from './alert-dash.component';

describe('AlertDashComponent', () => {
  let component: AlertDashComponent;
  let fixture: ComponentFixture<AlertDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
