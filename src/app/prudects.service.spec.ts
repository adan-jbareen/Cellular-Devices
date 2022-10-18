import { TestBed } from '@angular/core/testing';

import { PrudectsService } from './prudects.service';

describe('PrudectsService', () => {
  let service: PrudectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrudectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
