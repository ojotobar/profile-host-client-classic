import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  imports: [],
  templateUrl: './skill-list.component.html',
  styles: ``
})
export class SkillListComponent {
  @Input() data: string[] = [];
}
