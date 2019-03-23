import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getFormattedArray(arr: string[]) : string[] {
    let set=[]
    for (let el of arr) {
      if (set.indexOf(el)==-1 && el!=null && el!=undefined && el!="") {
        if (el.indexOf('|||')==-1) {
          set.push(el)
        }
        else {
          el.split('|||').forEach((elem)=> {
            console.log("elem");
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
