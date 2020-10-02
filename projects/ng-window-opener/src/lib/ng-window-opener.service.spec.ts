import { TestBed } from '@angular/core/testing';

import { NgWindowOpenerService } from './ng-window-opener.service';

describe('NgWindowOpenerService', () => {
  let service: NgWindowOpenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWindowOpenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
