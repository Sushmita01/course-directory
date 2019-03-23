import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { MaterialModule } from './modules/material-module/material-module';
import { CourseManagementModule } from './modules/course-management/course-management.module';
import { SideFilterModule } from './modules/side-filter/side-filter.module';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CourseManagementModule,
    SideFilterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
