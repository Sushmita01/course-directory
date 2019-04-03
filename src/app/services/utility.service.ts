import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }


  //this function splits all strings containing "|||" and pushes them into the resultant array as individual elements
  getFormattedArray(arr: string[]) : string[] {
    let set=[]
    for (let el of arr) {
      if (set.indexOf(el)==-1 && el!=null && el!=undefined && el!="") {
        if (el.indexOf('|||')==-1) {
          set.push(el)
        }
        else {
          el.split('|||').forEach((elem)=> {
            if (set.indexOf(elem)==-1 && elem!=null && elem!=undefined && elem!="") {
              set.push(elem);
            }
          })
        }
      }
    }
    return set;
  }
}
