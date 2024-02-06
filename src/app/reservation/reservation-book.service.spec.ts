import { TestBed } from '@angular/core/testing';

import { ReservationBookService } from './reservation-book.service';

describe('ReservationBookService', () => {
  let service: ReservationBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
