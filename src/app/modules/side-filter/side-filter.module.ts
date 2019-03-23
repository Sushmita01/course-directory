import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideFilterContainerComponent } from './components/side-filter-container/side-filter-container.component';
import { MaterialModule } from '../material-module/material-module';
import { CourseFilterPipe } from '../../course-filter.pipe';

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [SideFilterContainerComponent,CourseFilterPipe],
  exports: [SideFilterContainerComponent]
})
export class SideFilterModule { }
