import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszComponentDatetimeYearComponent } from './stansz-component-datetime-year.component';

describe('StanszComponentDatetimeYearComponent', () => {
  let component: StanszComponentDatetimeYearComponent;
  let fixture: ComponentFixture<StanszComponentDatetimeYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszComponentDatetimeYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszComponentDatetimeYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
