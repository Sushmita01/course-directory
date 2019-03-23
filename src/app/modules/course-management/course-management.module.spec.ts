import { CourseManagementModule } from './course-management.module';

describe('CourseManagementModule', () => {
  let courseManagementModule: CourseManagementModule;

  beforeEach(() => {
    courseManagementModule = new CourseManagementModule();
  });

  it('should create an instance', () => {
    expect(courseManagementModule).toBeTruthy();
  });
});
