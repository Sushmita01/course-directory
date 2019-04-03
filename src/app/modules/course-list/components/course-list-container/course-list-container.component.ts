import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  public upArrowIcon: string;
  public downArrowIcon: string;
  public sessionAscending: boolean = true;
  public durationAscending: boolean = true;
  public sortObject: Object;
  public filterBarExpanded: boolean = false;
  @Output() expandFilterBar: EventEmitter<boolean>= new EventEmitter();

  @Input() 
  filterOptions;


  constructor(private courseDataService: CourseDataService) {
    this.images=IMAGES;
    this.upArrowIcon = this.images.UP_ARROW;
    this.downArrowIcon = this.images.DOWN_ARROW ;
   }

  ngOnInit() {
    this.getCourseData();
    this.constructSortPipe();
  }

  constructSortPipe() {
    this.sortObject = {"Next Session Date":this.sessionAscending,"Length":this.durationAscending};
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

  expandFilterOptions() {
    this.filterBarExpanded =!this.filterBarExpanded;
    this.expandFilterBar.emit(this.filterBarExpanded);  
  }
  
}
