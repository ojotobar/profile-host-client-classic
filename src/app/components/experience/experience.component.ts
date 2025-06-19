import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';
import { ExperienceResponseModel } from '../../entities/models/experience-models';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';
import { DateFormatterPipe } from '../../pipes/date-formatter.pipe';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';

@Component({
  standalone: true,
  selector: 'app-experience',
  imports: [
    RouterLink,
    CustomAlertComponent,
    CustomSpinnerComponent,
    DateFormatterPipe
  ],
  templateUrl: './experience.component.html',
  styles: ``
})
export class ExperienceComponent implements OnInit {
  loading: boolean = false;
  hasError: boolean = false;
  appSvc = inject(AppService);
  CustomClassTypeEnum = CustomClassTypeEnum;
  experiences: ExperienceResponseModel[] = [];

  ngOnInit(): void {
    this.getExperienceList()
  }

  getExperienceList() {
    this.loading = true;
    this.appSvc.getExperienceListObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          this.experiences = <ExperienceResponseModel[]>(data.data.experiences);
          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
    })
  }
}
