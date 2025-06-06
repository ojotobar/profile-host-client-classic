import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.component.html',
  styles: ``
})
export class ExperienceComponent {
  experiences = [
    {
      id: 1,
      company: 'Google Corp',
      title: 'Senior Software Engineer',
      description: 'Worked on full-stack web development, implementing scalable solutions for clients.',
      startYear: '2020',
      endYear: '2024'
    },
    {
      id: 2,
      company: 'Tech Corp',
      title: 'Software Engineer II',
      description: 'Worked on full-stack web development, implementing scalable solutions for clients.',
      startYear: '2020',
      endYear: '2024'
    }
  ]
}
