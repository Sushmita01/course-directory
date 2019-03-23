import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { SideFilterModule } from '../side-filter/side-filter.module';
import { CourseListModule } from '../course-list/course-list.module';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,SideFilterModule,CourseListModule
  ],
  declarations: [CourseManagementComponent,HeaderComponent],
  exports: [CourseManagementComponent]
})
export class CourseManagementModule { }
