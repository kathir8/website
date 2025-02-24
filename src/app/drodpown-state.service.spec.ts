import { TestBed } from '@angular/core/testing';

import { DrodpownStateService } from './drodpown-state.service';

describe('DrodpownStateService', () => {
  let service: DrodpownStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrodpownStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
