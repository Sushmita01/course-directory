import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseSort'
})
export class CourseSortPipe implements PipeTransform {

  transform(values: any[] = [], args?: any): any {
    if (args) console.log(args);


    if (args && Array.isArray(values)) {
      // copy all objects of original array into new array of objects
      var returnobjects = values;
      
      // looping through all the sort fields in args
      //AND operation between fields
      for (let filterkey of Object.keys(args)) {
        let filtervalue = args[filterkey];
        if (filtervalue)   {                                //ascending order
          returnobjects = returnobjects.sort(function(a, b) {
            console.log(filterkey,filtervalue);
            if (a[filterkey]<=b[filterkey]) return -1
            else return 1
          })
        }
        else {
          returnobjects = returnobjects.sort(function(a, b) {
            console.log(filterkey,filtervalue);
            if (a[filterkey]<=b[filterkey]) return 1
            else return -1
          })
        }              



  

      };
      // return new array of objects to *ngFor directive
      return returnobjects;
    }
    else {
      return values;
    }

  }


}
