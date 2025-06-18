import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  constructor() { 
    // Optional: check localStorage for user preference
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme === 'true') {
      this.enableDark();
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('dark-theme', String(this.darkMode));
  }

  setDefaultThemeByTime(): void {
    const hour = new Date().getHours();
    if(hour >= 18 || hour <= 6){
      document.body.classList.add('dark-theme');
      this.darkMode = true;
    }else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('dark-theme', String(this.darkMode));
  } 

  enableDark() {
    this.darkMode = true;
    document.body.classList.add('dark-theme');
  }

  enableLight() {
    this.darkMode = false;
    document.body.classList.remove('dark-theme');
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
