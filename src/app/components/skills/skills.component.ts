import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { XpLevelPipe } from '../../pipes/xp-level.pipe';
import { XpYearsPipe } from '../../pipes/xp-years.pipe';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';
import { SkillResponseModel } from '../../entities/models/skill-model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-skills',
  imports: [
    MatIconModule, 
    XpLevelPipe, 
    XpYearsPipe,
    CustomAlertComponent,
    CustomSpinnerComponent
  ],
  templateUrl: './skills.component.html',
  styles: ``
})
export class SkillsComponent {
  loading: boolean = false;
  hasError: boolean = false;
  appSvc = inject(AppService);
  CustomClassTypeEnum = CustomClassTypeEnum;
  skills: SkillResponseModel[] = [];

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills() {
    this.loading = true;
    this.appSvc.getSkillsObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          this.skills = <SkillResponseModel[]>(data.data.skills);
          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
    })
  }
}
