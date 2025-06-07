import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xpYears'
})
export class XpYearsPipe implements PipeTransform {

  transform(years: number): string {
    return years >= 2 ? 'years' : 'year';
  }

}
