import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { IMAGES as IMAGES } from '../../../../../environments/config.all';


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
  public images;
  public expandIcon : string;
  public minimizeIcon : string;
  public institutionIcon : string;
  public providerIcon : string;
  public expandedCard : boolean = false;



  constructor() { 
    this.images=IMAGES;
    this.expandIcon=this.images.EXPAND;
    this.minimizeIcon=this.images.MINIMIZE;
    this.institutionIcon=this.images.INSTITUTION;
    this.providerIcon=this.images.PROVIDER;

  }

  ngOnInit() {
  }

  toggleCard() {
    this.expandedCard = !this.expandedCard;
    console.log(this.expandedCard);
  }


  extractValues() {
    this.cid=this.item["Course Id"];
    this.name=this.item["Course Name"];   //card-upper
    this.provider = this.item["Provider"];    //card-upper
    this.universities = this.item.Universities.Institutions.split("|||"); //card-upper
    this.parentSubject = this.item["Parent Subject"];  //card-upper
    this.childSubject = this.item["Child Subject"];
    this.courseURL = this.item["Url"];    //card-upper
    this.nextSessionDate = this.item["Next Session Date"];
    this.length = this.item["Length"];
    this.mediaURL = this.item["Video(Url)"];  //card-upper
    this.videoUrl=this.mediaURL.split("|||")[0];    //card-upper
    this.imageUrl=(this.mediaURL.split("|||").length > 1) ?  this.mediaURL.split("|||")[1] : null;

  }

  ngOnChanges() {

      this.extractValues();
      
    
  }

}
