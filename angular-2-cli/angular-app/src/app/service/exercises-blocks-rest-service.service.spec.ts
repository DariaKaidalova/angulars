import { TestBed, inject } from '@angular/core/testing';

import { ExercisesBlocksRestServiceService } from './exercises-blocks-rest-service.service';

describe('ExercisesBlocksRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExercisesBlocksRestServiceService]
    });
  });

  it('should ...', inject([ExercisesBlocksRestServiceService], (service: ExercisesBlocksRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
