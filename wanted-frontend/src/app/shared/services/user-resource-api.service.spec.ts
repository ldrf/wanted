import { TestBed, inject } from '@angular/core/testing';

import { UserResourceApiService } from './user-resource-api.service';

describe('UserResourceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResourceApiService]
    });
  });

  it('should be created', inject([UserResourceApiService], (service: UserResourceApiService) => {
    expect(service).toBeTruthy();
  }));
});
