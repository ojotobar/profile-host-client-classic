import { Component, Input } from '@angular/core';
import { CustomClassTypeEnum } from '../../../entities/enums/custom-alert-type-enum';

@Component({
  selector: 'app-custom-alert',
  imports: [],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.scss'
})
export class CustomAlertComponent {
  @Input() message: string = '';
  @Input() heading: string = '';
  @Input() alertType: CustomClassTypeEnum = CustomClassTypeEnum.danger
}
