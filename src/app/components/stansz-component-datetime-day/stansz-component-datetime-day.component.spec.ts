import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszComponentDatetimeDayComponent } from './stansz-component-datetime-day.component';

describe('StanszComponentDatetimeDayComponent', () => {
  let component: StanszComponentDatetimeDayComponent;
  let fixture: ComponentFixture<StanszComponentDatetimeDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszComponentDatetimeDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszComponentDatetimeDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
