import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { CourseDataService } from './course-data.service';

describe('CourseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CourseDataService = TestBed.get(CourseDataService);
    expect(service).toBeTruthy();
  });
});
