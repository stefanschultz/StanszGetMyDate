import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszComponentDatetimeWeekComponent } from './stansz-component-datetime-week.component';

describe('StanszComponentDatetimeWeekComponent', () => {
  let component: StanszComponentDatetimeWeekComponent;
  let fixture: ComponentFixture<StanszComponentDatetimeWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszComponentDatetimeWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszComponentDatetimeWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
