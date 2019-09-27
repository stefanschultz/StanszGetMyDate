import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanszPageNotFoundComponent } from './stansz-page-not-found.component';

describe('StanszPageNotFoundComponent', () => {
  let component: StanszPageNotFoundComponent;
  let fixture: ComponentFixture<StanszPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanszPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanszPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
