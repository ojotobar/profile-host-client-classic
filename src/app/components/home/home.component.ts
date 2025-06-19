import { Component } from '@angular/core';
import { SummaryCardsComponent } from '../summary-cards/summary-cards.component';
import { SocialsComponent } from '../socials/socials.component';
import { ProfileService } from '../../services/profile.service';
import { ProfileModel, ProfileRecordResult, ProfileRecordSummaryModel, SocialMedia } from '../../entities/models/profile-models';
import { SkillListComponent } from '../common/skill-list/skill-list.component';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';
import { InitialsPipe } from '../../pipes/initials.pipe';

@Component({
  selector: 'app-home',
  imports: [
    SummaryCardsComponent, 
    SocialsComponent,
    SkillListComponent,
    CustomSpinnerComponent,
    CustomAlertComponent,
    InitialsPipe
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  loading: boolean = false;
  hasError: boolean = false;
  socialMedia: SocialMedia[] = [];
  summary!: ProfileRecordSummaryModel;
  profile!: ProfileModel;
  CustomClassTypeEnum = CustomClassTypeEnum;
  errorMessage: string = "An error occurred while getting your profile data. Please try again."

  constructor(private readonly profileSvc: ProfileService){
    this.getProfileRecord()
  }

  getProfileRecord() {
      this.loading = true;
      this.profileSvc.getProfileRecordObservable()
        .valueChanges
        .subscribe({
          next: (data: any) => {
            var result = <ProfileRecordResult>(data.data.profileRecord);
            if(result && result.success && result.profile && result.summary){
              this.socialMedia = result.profile.socialMedia;
              this.summary = result.summary;
              this.profile = result.profile;
            }
            else{
              this.hasError
            }
            this.loading = false;
          },
          error: (e: Error) => {
            this.loading = false;
            this.hasError = true;
          }
        })
  }

  get xpVerbiage(): string {
    return this.summary && this.summary.yearsOfExperience > 1 ? 'Years of Experience' : 'Year of Experience'
  }
}
