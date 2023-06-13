import { TestBed } from '@angular/core/testing';

import { AttacksService } from './attacks.service';

describe('AttacksService', () => {
  let service: AttacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
