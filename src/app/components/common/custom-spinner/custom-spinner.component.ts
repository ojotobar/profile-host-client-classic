import { Component, Input } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-custom-spinner',
  imports: [],
  templateUrl: './custom-spinner.component.html',
  styleUrl: './custom-spinner.component.scss'
})
export class CustomSpinnerComponent {
  @Input() width: string = '3rem';
  @Input() height: string = '3rem';
  @Input() classes: string = '';

  color: string = '';

  constructor(private themeSvc: ThemeService){
    this.color = this.themeSvc.isDarkMode() ? 'danger' : 'dark'
  }
}
