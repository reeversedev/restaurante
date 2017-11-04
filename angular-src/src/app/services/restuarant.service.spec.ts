import { TestBed, inject } from '@angular/core/testing';

import { RestuarantService } from './restuarant.service';

describe('RestuarantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestuarantService]
    });
  });

  it('should be created', inject([RestuarantService], (service: RestuarantService) => {
    expect(service).toBeTruthy();
  }));
});
