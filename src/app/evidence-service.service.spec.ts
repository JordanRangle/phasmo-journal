import { TestBed } from '@angular/core/testing';

import { EvidenceServiceService } from './evidence-service.service';

describe('EvidenceServiceService', () => {
  let service: EvidenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvidenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
