import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: Date | null, defaultValue: string = 'Till Date'): string {
    if(!value){
      return defaultValue
    }

    const date = new Date(value);
    const [month, year] = date.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    }).split(' ');

    return `${month}. ${year}`;
  }
}
