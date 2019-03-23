import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return values;
  }

}
