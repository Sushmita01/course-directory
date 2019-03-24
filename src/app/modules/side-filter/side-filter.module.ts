import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideFilterContainerComponent } from './components/side-filter-container/side-filter-container.component';
import { MaterialModule } from '../material-module/material-module';


@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [SideFilterContainerComponent],
  exports: [SideFilterContainerComponent]
})
export class SideFilterModule { }
