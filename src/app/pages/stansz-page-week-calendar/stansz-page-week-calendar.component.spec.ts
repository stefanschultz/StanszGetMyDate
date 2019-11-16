import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszPageWeekCalendarComponent } from './stansz-page-week-calendar.component';

describe('StanszPageCalendarComponent', () => {
  let component: StanszPageWeekCalendarComponent;
  let fixture: ComponentFixture<StanszPageWeekCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszPageWeekCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszPageWeekCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
