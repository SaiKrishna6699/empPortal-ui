import { TestBed } from '@angular/core/testing';

import { NormService } from './norm.service';

describe('NormService', () => {
  let service: NormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
