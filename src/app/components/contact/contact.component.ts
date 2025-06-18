import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomService } from '../../services/custom.service';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-contact',
  imports: [SocialsComponent],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  email: string = 'ojotobar@gmail.com';
  phone: string = '08035222858';
  latitude: string = '6.52437930';
  longitude: string = '3.37920570';
  safeMapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, 
    private readonly customService: CustomService) {}

  ngOnInit(): void {
    const url = `https://www.google.com/maps?q=${this.latitude},${this.longitude}&hl=en&z=14&output=embed`;
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  displayMap(){
    return this.customService.isValidNumber(this.latitude) && 
      this.customService.isValidNumber(this.longitude);
  }
}
