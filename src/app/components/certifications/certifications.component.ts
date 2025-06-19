import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MonthYearOrNaPipe } from '../../pipes/month-year-or-na.pipe';
import { AppService } from '../../services/app.service';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';
import { CertificationResponseModel } from '../../entities/models/certification-model';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-certifications',
  imports: [
    DatePipe, 
    MonthYearOrNaPipe,
    CustomAlertComponent,
    CustomSpinnerComponent
  ],
  templateUrl: './certifications.component.html',
  styles: ``
})
export class CertificationsComponent implements OnInit {
  loading: boolean = false;
  hasError: boolean = false;
  appSvc = inject(AppService);
  CustomClassTypeEnum = CustomClassTypeEnum;
  certifications: CertificationResponseModel[] = [];

  ngOnInit(): void {
    this.getCertifications()
  }

  getCertifications() {
    this.loading = true;
    this.appSvc.getCertificationsObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          this.certifications = <CertificationResponseModel[]>(data.data.certifications);
          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
    })
  }
}
