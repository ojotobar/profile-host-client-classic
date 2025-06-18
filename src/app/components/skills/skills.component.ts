import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { XpLevelPipe } from '../../pipes/xp-level.pipe';
import { XpLevelEnum } from '../../entities/enums/xp-level-enum';
import { XpYearsPipe } from '../../pipes/xp-years.pipe';

@Component({
  selector: 'app-skills',
  imports: [MatIconModule, XpLevelPipe, XpYearsPipe],
  templateUrl: './skills.component.html',
  styles: ``
})
export class SkillsComponent {
  skills = [
    { Name: "JavaScript", YearsOfExperience: 5, Certified: true, Level: XpLevelEnum.Expert },
    { Name: "React.js", YearsOfExperience: 4, Certified: false, Level: XpLevelEnum.Advanced },
    { Name: "C#", YearsOfExperience: 5, Certified: true, Level: XpLevelEnum.Expert },
    { Name: ".NET Core", YearsOfExperience: 5, Certified: true, Level: XpLevelEnum.Advanced },
    { Name: "Angular", YearsOfExperience: 8, Certified: false, Level: XpLevelEnum.Intermediate },
    { Name: "Kubernettes", YearsOfExperience: 1, Certified: true, Level: XpLevelEnum.Novice },
    { Name: "Ansible", YearsOfExperience: 0.5, Certified: false, Level: XpLevelEnum.Beginner }
  ];
}
