import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomService } from '../../services/custom.service';
import { SocialsComponent } from '../socials/socials.component';
import { AppService } from '../../services/app.service';
import { ContactInfoResponseModel } from '../../entities/models/profile-models';
import { CustomSpinnerComponent } from '../common/custom-spinner/custom-spinner.component';
import { CustomAlertComponent } from '../common/custom-alert/custom-alert.component';
import { CustomClassTypeEnum } from '../../entities/enums/custom-alert-type-enum';

@Component({
  selector: 'app-contact',
  imports: [
    SocialsComponent,
    CustomSpinnerComponent,
    CustomAlertComponent
  ],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent implements OnInit {
  safeMapUrl!: SafeResourceUrl;
  loading: boolean = false;
  hasError: boolean = false;
  appSvc = inject(AppService);
  customSvc = inject(CustomService)
  sanitizer = inject(DomSanitizer);
  contactInfo!: ContactInfoResponseModel;
  CustomClassTypeEnum = CustomClassTypeEnum;

  ngOnInit(): void {
    this.getContactInfo()
  }

  getContactInfo() {
    this.loading = true;
    this.appSvc.getContactInfoObservable()
      .valueChanges
      .subscribe({
        next: (data: any) => {
          this.contactInfo = <ContactInfoResponseModel>(data.data.userContactInfo);
          if(this.contactInfo && this.contactInfo.success){
            if(this.contactInfo.location){
              const url = `https://www.google.com/maps?q=${this.contactInfo.location.latitude},${this.contactInfo.location.longitude}&hl=en&z=14&output=embed`;
              this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
          }
          else{
            this.hasError = true;
          }
          this.loading = false;
        },
        error: (e: Error) => {
          this.loading = false;
          this.hasError = true;
        }
    })
  }

  displayMap(longitude: string, latitude: string){
    return this.customSvc.isValidNumber(latitude) && 
      this.customSvc.isValidNumber(longitude);
  }
}
