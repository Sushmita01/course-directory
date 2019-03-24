import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(values: any[] = [], args?: any): any {
    if (args) console.log(args);


    if (args && Array.isArray(values)) {
      // copy all objects of original array into new array of objects
      var returnobjects = values;
      
      // looping through all the filter fields in args
      //AND operation between fields, OR operation between multiple values of a field
      for (let filterkey of Object.keys(args)) {
        let filtervalue = args[filterkey];
        if ( Array.isArray(filtervalue) && filtervalue.length===0 ) filtervalue=null;
        if (filtervalue!= null && filtervalue!= undefined) {
          values.forEach(function (objectToFilter) {
              let flag=0;
              for (let val of filtervalue) { 
                // Checking if any of the selected options for a particular field matches the current object
                // OR Operation
                if (filterkey!="Universities.Institutions") {         
                  //check for exact value match
                  if (objectToFilter[filterkey] == val && val != "") {
                    //there's a match!
                    flag=1;
                  }
              }
              else {                        
                //check for substring match since universities are partitioned by "|||"
                if (objectToFilter[filterkey.split('.')[0]][filterkey.split('.')[1]].indexOf(val)!=-1 && val != "") {
                  //there's a match!
                  console.log("University match:",objectToFilter[filterkey.split('.')[0]][filterkey.split('.')[1]]);
                  flag=1;
                }

              }
  
              }
                              
              if (flag!=1 )  // object didn't match a single filter value for a particular field so remove it from array via filter
              returnobjects = returnobjects.filter(obj => obj !== objectToFilter);


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
