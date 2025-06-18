import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-education',
  imports: [RouterLink],
  templateUrl: './education.component.html',
  styles: ``
})
export class EducationComponent {
  educationData = [
        {
            InstitutionName: "Harvard University",
            Level: "Bachelor's",
            LevelDescription: "Bachelor of Science",
            Major: "Computer Science",
            StartDate: "2015-09",
            EndDate: "2019-06",
            Location: "Cambridge, MA"
        },
        {
            InstitutionName: "MIT",
            Level: "Master's",
            LevelDescription: "Master of Science",
            Major: "Artificial Intelligence",
            StartDate: "2019-09",
            EndDate: "2021-06",
            Location: "Cambridge, MA"
        }
    ];
}
