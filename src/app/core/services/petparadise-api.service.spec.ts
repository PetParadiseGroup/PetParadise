import { TestBed } from '@angular/core/testing';

import { PetparadiseApiService } from './petparadise-api.service';

describe('PetparadiseApiService', () => {
  let service: PetparadiseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetparadiseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
