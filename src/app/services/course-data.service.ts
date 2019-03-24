import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import *  as config from '../../environments/environment';
import { UtilityService } from './utility.service';


interface courseDetail {
  "Course Id": number;
  "Course Name":string,
  "Provider": string,
  "Universities": Object,
  "Parent Subject": string,
  "Child Subject": string,
  "Url": string,
  "Next Session Date": string,
  "Length": number ,
  "Video(Url)": string
} 

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private http:HttpClient, private utilityService: UtilityService) { }  

  getCourseDetails():Observable<courseDetail[]>{
    let headers= new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    // headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let getCoursesURL= config.environment.getCoursesUrl;

    return this.http.get<courseDetail[]>(getCoursesURL); 
  }

  getProviderDetails():Observable<string[]>{
    let getCoursesURL= config.environment.getCoursesUrl;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    return this.http.get<string[]>(getCoursesURL).pipe(
      map((data: any[]) => {
        let arrayWithDuplicates=data.map((value)=> {
          return value["Provider"];
        });
        return this.utilityService.getFormattedArray(arrayWithDuplicates);
      })
    ); 
  }

  getCollabDetails():Observable<string[]>{
    let getCoursesURL= config.environment.getCoursesUrl;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    return this.http.get<string[]>(getCoursesURL).pipe(
      map((data: any[]) => {
        let arrayWithDuplicates=data.map((value)=> {
          return value["Universities"]["Institutions"];
        });
        return this.utilityService.getFormattedArray(arrayWithDuplicates);
        
      })
    ); 
  }

  getParentFieldDetails():Observable<string[]>{
    let getCoursesURL= config.environment.getCoursesUrl;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json'); 
    return this.http.get<string[]>(getCoursesURL).pipe(
      map((data: any[]) => {
        let arrayWithDuplicates=data.map((value)=> {
          return value["Parent Subject"];
        });
        return this.utilityService.getFormattedArray(arrayWithDuplicates);
      })
    ); 
  }
}
