import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszComponentDatetimeMonthComponent } from './stansz-component-datetime-month.component';

describe('StanszComponentDatetimeMonthComponent', () => {
  let component: StanszComponentDatetimeMonthComponent;
  let fixture: ComponentFixture<StanszComponentDatetimeMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszComponentDatetimeMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszComponentDatetimeMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
