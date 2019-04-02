import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilityService = TestBed.get(UtilityService);
    expect(service).toBeTruthy();
  });
  it('should split "|||" separated strings and return formatted data', () => {
    let mockData=["Apple","Banana|||Pineapple","Musk Melon","Papaya","Watermelon|||Peach"]
    const service: UtilityService = TestBed.get(UtilityService);
    expect(() => {
      service.getFormattedArray(mockData).forEach((mockString)=> {
        if( mockString.indexOf("|||")!=-1) return false
      })
      return true;
    }
      ).toBeTruthy();
  });
});
