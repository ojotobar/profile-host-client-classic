import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MonthYearOrNaPipe } from '../../pipes/month-year-or-na.pipe';

@Component({
  selector: 'app-certifications',
  imports: [DatePipe, MonthYearOrNaPipe],
  templateUrl: './certifications.component.html',
  styles: ``
})
export class CertificationsComponent {
  certifications = [
    {
        Name: "AWS Certified Solutions Architect",
        Institution: "Amazon Web Services",
        Link: "https://aws.amazon.com/certification/",
        DateObtained: new Date(2022, 5, 15),
        Expires: new Date(2025, 5, 15)
    },
    {
        Name: "Google Professional Cloud Architect",
        Institution: "Google Cloud",
        Link: "https://cloud.google.com/certification/cloud-architect",
        DateObtained: new Date(2021, 7, 20),
        Expires: null // No expiration date
    }
  ];
}
