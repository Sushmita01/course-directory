import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListContainerComponent } from './components/course-list-container/course-list-container.component';
import { CourseItemsComponent } from './components/course-items/course-items.component';
import { CourseFilterPipe } from '../../course-filter.pipe';
import { CourseSortPipe } from '../../course-sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListContainerComponent, CourseItemsComponent, CourseFilterPipe, CourseSortPipe],
  exports: [CourseListContainerComponent]
})
export class CourseListModule { }
