import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CourseDataService } from 'src/app/services/course-data.service';


@Component({
  selector: 'app-side-filter-container',
  templateUrl: './side-filter-container.component.html',
  styleUrls: ['./side-filter-container.component.scss']
})
export class SideFilterContainerComponent implements OnInit,OnChanges {
  providers: string[];
  collaborators: string[];
  paths: string[];
  providerFormControl = new FormControl()
  collaboratorFormControl = new FormControl();
  pathFormControl = new FormControl();


  constructor(private courseDataService: CourseDataService) { }

  ngOnInit() {
    this.getProvidersData();
    this.getCollabData();
    this.getFieldData()
  }


  getProvidersData() {
    this.courseDataService.getProviderDetails().subscribe((data)=> {
      this.providers=data;
    })
  }

  getCollabData() {
    this.courseDataService.getCollabDetails().subscribe((data)=> {
      this.collaborators=data;
    })
  }

  getFieldData() {
    this.courseDataService.getParentFieldDetails().subscribe((data)=> {
      this.paths=data;
    })
  }

  providerChange(e) {
    console.log(e);
  }
  collChange(e) {
    console.log(e);
  }
  
  pathChange(e) {
    console.log(e);
  }


  ngOnChanges() {
    console.log(this.providerFormControl);
    console.log(this.collaboratorFormControl);
    console.log(this.pathFormControl);

  }


}
