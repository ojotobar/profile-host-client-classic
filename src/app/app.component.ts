import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { EnvService } from './services/env.service';
import { CustomAlertComponent } from './components/common/custom-alert/custom-alert.component';
import { CustomClassTypeEnum } from './entities/enums/custom-alert-type-enum';
import { CustomSpinnerComponent } from './components/common/custom-spinner/custom-spinner.component';
import { ProfileService } from './services/profile.service';
import { ProfileSummaryForMenu, ProfileSummaryForMenuResult } from './entities/models/profile-models';
import { CustomService } from './services/custom.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    SidebarComponent, 
    TopbarComponent, 
    MatIconModule,
    FooterComponent,
    CustomAlertComponent,
    CustomSpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  message = `Something went wrong and couldn't get the necessary startup data.`;
  title = 'portfolio-classic';
  isSidebarOpen: boolean = false;
  themeService = inject(ThemeService);
  envService = inject(EnvService);
  profileSvc = inject(ProfileService);
  customSvc = inject(CustomService);
  apiKeyHasValue: boolean = false;
  loading: boolean = false;
  hasError: boolean = false;
  summary!: ProfileSummaryForMenu;
  CustomClassTypeEnum = CustomClassTypeEnum;

  constructor(){
    this.themeService.setDefaultThemeByTime();
  }

  ngOnInit(): void {
    if(this.envService.apiKey){
      this.apiKeyHasValue = true;
    }
    this.customSvc.getAndSetFavicon();
    this.getProfileSummaryForMenus();
    this.themeService.setDefaultThemeByTime();
  }

  getProfileSummaryForMenus() {
    this.loading = true;
    this.profileSvc.getSummaryForMenuObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          var result = <ProfileSummaryForMenuResult>(data.data.profileSummaries);
          if(result.success){
            this.summary = result.summary;
            if(this.summary){
              document.title = `${this.summary.firstName} ${this.summary.lastName} | Portfolio`;
            }
          }else{
            this.hasError = true
          }

          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
      })
  }
}
