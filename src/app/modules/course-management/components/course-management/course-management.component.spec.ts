import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideFilterModule } from '../../../side-filter/side-filter.module';
import { CourseListModule } from '../../../course-list/course-list.module';
import { HeaderComponent } from '../../../../components/header/header.component';
import { CourseManagementComponent } from './course-management.component';

describe('CourseManagementComponent', () => {
  let component: CourseManagementComponent;
  let fixture: ComponentFixture<CourseManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManagementComponent, HeaderComponent],
      imports: [SideFilterModule,CourseListModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
