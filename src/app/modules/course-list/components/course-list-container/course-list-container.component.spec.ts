import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseFilterPipe } from '../../../../course-filter.pipe';
import { CourseSortPipe } from '../../../../course-sort.pipe';
import { CourseListContainerComponent } from './course-list-container.component';

describe('CourseListContainerComponent', () => {
  let component: CourseListContainerComponent;
  let fixture: ComponentFixture<CourseListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListContainerComponent, CourseFilterPipe,CourseSortPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
