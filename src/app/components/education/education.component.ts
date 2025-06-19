import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EducationResponseModel } from '../../entities/models/education-models';
import { AppService } from '../../services/app.service';
import { DateFormatterPipe } from '../../pipes/date-formatter.pipe';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-education',
  imports: [
    RouterLink,
    DateFormatterPipe,
    CustomAlertComponent,
    CustomSpinnerComponent
  ],
  templateUrl: './education.component.html',
  styles: ``
})
export class EducationComponent implements OnInit {
  loading: boolean = false;
  hasError: boolean = false;
  appSvc = inject(AppService);
  CustomClassTypeEnum = CustomClassTypeEnum;
  educations: EducationResponseModel[] = [];

  ngOnInit(): void {
    this.getEducationList()
  }

  getEducationList() {
    this.loading = true;
    this.appSvc.getEducationListObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          this.educations = <EducationResponseModel[]>(data.data.educations);
          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
    })
  }
}
