import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthYearOrNa'
})
export class MonthYearOrNaPipe implements PipeTransform {

  transform(date: Date | null, defaultValueIfNull: string = 'No Expiration'): string {
    if(!date){
      return defaultValueIfNull;
    }

    date = new Date(date)
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      });
  }

}
