import { TestBed, inject } from '@angular/core/testing';

import { PaymentsListService } from './payments-list.service';

describe('PaymentsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentsListService]
    });
  });

  it('should be created', inject([PaymentsListService], (service: PaymentsListService) => {
    expect(service).toBeTruthy();
  }));
});
