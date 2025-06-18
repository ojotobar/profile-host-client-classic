import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  isValidNumber(str: string): boolean {
    if (str.trim() === '') return false;
    return !isNaN(Number(str));
  }
}
