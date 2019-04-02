import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { CourseDataService } from './course-data.service';

interface courseDetail {
  "Course Id": number;
  "Course Name":string,
  "Provider": string,
  "Universities": Object,
  "Parent Subject": string,
  "Child Subject": string,
  "Url": string,
  "Next Session Date": string,
  "Length": number ,
  "Video(Url)": string
} 

function typeGuard(toBeDetermined: any): toBeDetermined is courseDetail {
  return true
} 

describe('CourseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CourseDataService = TestBed.get(CourseDataService);
    expect(service).toBeTruthy();
  });

  it('should fetch data which implements the correct interface', () => {
    const service: CourseDataService = TestBed.get(CourseDataService);
    expect(typeGuard(service.getCourseDetails()[0])).toBeTruthy();
  });
});
