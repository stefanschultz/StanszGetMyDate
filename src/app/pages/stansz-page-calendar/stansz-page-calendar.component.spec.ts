import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszPageCalendarComponent } from './stansz-page-calendar.component';

describe('StanszPageCalendarComponent', () => {
  let component: StanszPageCalendarComponent;
  let fixture: ComponentFixture<StanszPageCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszPageCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszPageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
