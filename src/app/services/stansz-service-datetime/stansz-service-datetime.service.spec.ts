import { TestBed } from '@angular/core/testing';

import { StanszServiceDatetimeService } from './stansz-service-datetime.service';

describe('StanszServiceDatetimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StanszServiceDatetimeService = TestBed.get(StanszServiceDatetimeService);
    expect(service).toBeTruthy();
  });
});
