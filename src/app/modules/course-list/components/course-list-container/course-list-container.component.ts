import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CourseDataService } from 'src/app/services/course-data.service';
import { IMAGES as IMAGES } from '../../../../../environments/config.all';


@Component({
  selector: 'app-course-list-container',
  templateUrl: './course-list-container.component.html',
  styleUrls: ['./course-list-container.component.scss']
})
export class CourseListContainerComponent implements OnInit {
  public courseData : Array<object>;
  public totalRecordCount: number;
  public images;
  public upArrowURL : string;
  public downArrowURL : string;
  public sessionAscending: boolean = true;
  public durationAscending: boolean = true;
  public sortObject: Object;
  @Input() 
  filterOptions;

  constructor(private courseDataService: CourseDataService) {
    this.images=IMAGES;
    this.upArrowURL = this.images.UP_ARROW;
    this.downArrowURL = this.images.DOWN_ARROW ;
   }

  ngOnInit() {
    this.getCourseData();
  }

  constructSortPipe() {
    this.sortObject = {"session":this.sessionAscending,"duration":this.durationAscending};
    console.log("Sorting:",this.sortObject);
  }

  getCourseData() {
    this.courseDataService.getCourseDetails().subscribe((data)=> {
      this.courseData=data;
      this.totalRecordCount=this.courseData.length;
    })
  } 

  toggleSessionSort() {
    this.sessionAscending = !this.sessionAscending;
    this.constructSortPipe();
  }

  toggleLengthSort() {
    this.durationAscending = !this.durationAscending;
    this.constructSortPipe();

  }
}
