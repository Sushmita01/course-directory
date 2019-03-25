import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {
  public filterOptions: Object;
  public displayFilterSideBar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

//storing filter options recieved from side-filter-container, to be pushed to course-list-container
  filterSelectRecieved(e) {
    this.filterOptions=e;
  }

  filterBar(e) {
    this.displayFilterSideBar=e;
    console.log(this.displayFilterSideBar);

  }
}
