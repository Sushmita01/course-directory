import { Component, OnInit, OnChanges, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss']
})
export class CourseItemsComponent implements OnInit, OnChanges {
  @Input() 
  public item;
  public cid;
  public name;
  public provider;
  public universities;
  public parentSubject;
  public childSubject;
  public courseURL;
  public nextSessionDate;
  public length;
  public mediaURL;
  public videoUrl;
  public imageUrl;


  constructor() { }

  ngOnInit() {
  }


  extractValues() {
    this.cid=this.item["Course Id"];
    this.name=this.item["Course Name"];
    this.provider = this.item["Provider"];
    this.universities = this.item.Universities.Institutions;
    this.parentSubject = this.item["Parent Subject"];
    this.childSubject = this.item["Child Subject"];
    this.courseURL = this.item["Url"];
    this.nextSessionDate = this.item["Next Session Date"];
    this.length = this.item["Length"];
    this.mediaURL = this.item["Video(Url)"];
    this.videoUrl=this.mediaURL.split("|||")[0];
    this.imageUrl=(this.mediaURL.split("|||").length > 1 ?  this.mediaURL.split("|||")[1] : null;

  }

  ngOnChanges() {

      this.extractValues();
      
    
  }

}
