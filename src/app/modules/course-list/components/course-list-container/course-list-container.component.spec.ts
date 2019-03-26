import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseFilterPipe } from '../../../../course-filter.pipe';
import { CourseSortPipe } from '../../../../course-sort.pipe';
import { CourseListContainerComponent } from './course-list-container.component';
import { CourseItemsComponent } from '../course-items/course-items.component'
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('CourseListContainerComponent', () => {
  let component: CourseListContainerComponent;
  let fixture: ComponentFixture<CourseListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListContainerComponent,CourseItemsComponent, CourseFilterPipe,CourseSortPipe ],
      imports: [BrowserAnimationsModule,HttpClientTestingModule,HttpClientModule]
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
