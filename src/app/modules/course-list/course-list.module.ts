import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListContainerComponent } from './components/course-list-container/course-list-container.component';
import { CourseItemsComponent } from './components/course-items/course-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListContainerComponent, CourseItemsComponent],
  exports: [CourseListContainerComponent]
})
export class CourseListModule { }
