import { TestBed } from '@angular/core/testing';

import { FormHolderService } from './form-holder.service';

describe('FormHolderService', () => {
  let service: FormHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
