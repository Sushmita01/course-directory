import { Component, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/services/course-data.service';

@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.scss']
})
export class CourseListContainerComponent implements OnInit {
  public courseData;

  constructor(private courseDataService: CourseDataService) { }

  ngOnInit() {
    this.getCourseData();
  }

  getCourseData() {
    this.courseDataService.getCourseDetails().subscribe((data)=> {
      console.log(data);
      this.courseData=data;
    })
  } 

}
