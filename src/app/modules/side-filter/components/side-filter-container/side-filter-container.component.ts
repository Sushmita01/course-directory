import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CourseDataService } from 'src/app/services/course-data.service';


@Component({
  selector: 'app-side-filter-container',
  templateUrl: './side-filter-container.component.html',
  styleUrls: ['./side-filter-container.component.scss']
})
export class SideFilterContainerComponent implements OnInit {
  allProviders: string[];
  allCollaborators: string[];
  allPaths: string[];
  selectedProviders = null;
  selectedCollaborators = null;
  selectedPaths = null;
  providerFormControl = new FormControl()
  collaboratorFormControl = new FormControl();
  pathFormControl = new FormControl();
  @Output()
  filterSelectEvent: EventEmitter<object> = new EventEmitter()

  constructor(private courseDataService: CourseDataService) { }

  ngOnInit() {
    this.getProvidersData();
    this.getCollabData();
    this.getFieldData()
  }


  emitFilterEvents() {
    let emitObject= {"Provider" : this.selectedProviders,"Universities.Institutions" : this.selectedCollaborators,"Parent Subject" : this.selectedPaths,"Child Subject" : null}
    this.filterSelectEvent.emit(emitObject);
  }

  getProvidersData() {
    this.courseDataService.getProviderDetails().subscribe((data)=> {
      this.allProviders=data;
    })
  }

  getCollabData() {
    this.courseDataService.getCollabDetails().subscribe((data)=> {
      this.allCollaborators=data;
    })
  }

  getFieldData() {
    this.courseDataService.getParentFieldDetails().subscribe((data)=> {
      this.allPaths=data;
    })
  }

  providerChange(e) {
    this.selectedProviders=e;
    this.emitFilterEvents();
  }
  collChange(e) {
    this.selectedCollaborators=e;
    this.emitFilterEvents();

  }
  
  pathChange(e) {
    this.selectedPaths=e;
    this.emitFilterEvents();

  }

}
