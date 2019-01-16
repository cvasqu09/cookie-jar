import { TestBed } from '@angular/core/testing';

import { MockContactService } from './mock-contact.service';

describe('MockContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockContactService = TestBed.get(MockContactService);
    expect(service).toBeTruthy();
  });
});
