import { TestBed, inject } from '@angular/core/testing';

import { ExercisesBlocksServiceService } from './exercises-blocks-service.service';

describe('ExercisesBlocksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExercisesBlocksServiceService]
    });
  });

  it('should ...', inject([ExercisesBlocksServiceService], (service: ExercisesBlocksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
