import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ProfileRecordSummaryModel } from '../../entities/models/profile-models';

@Component({
  selector: 'app-summary-cards',
  imports: [MatIconModule, RouterLink],
  templateUrl: './summary-cards.component.html',
  styles: ``
})
export class SummaryCardsComponent {
  @Input() data!: ProfileRecordSummaryModel;

  get skillsVerbiage(): string {
    return this.data && this.data.skillCount > 1 ? 'skills' : 'skill'
  }

  get educationVerbiage(): string {
    return this.data && this.data.educationCount > 1 ? 'schools attended' : 'school attended'
  }

  get projectVerbiage(): string {
    return this.data && this.data.projectCount > 1 ? 'projects' : 'project'
  }

  get xpVerbiage(): string {
    return this.data && this.data.skillCount > 1 ? 'years' : 'year'
  }
}
