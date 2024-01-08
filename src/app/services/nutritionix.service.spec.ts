import { TestBed } from '@angular/core/testing';

import { NutritionixService } from './nutritionix.service';

describe('NutritionixService', () => {
  let service: NutritionixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
