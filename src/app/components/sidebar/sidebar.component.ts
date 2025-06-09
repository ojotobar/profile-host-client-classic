import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProfileSummaryForMenu } from '../../entities/models/profile-models';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
  animations: [
      trigger('sidebarSlide', [
        state('closed', style({ left: '-180px' })),
        state('open', style({ left: '0' })),
        transition('closed <=> open', animate('300ms ease')),
      ]),
      trigger('backdropFade', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease-out', style({ opacity: 0.5 })),
        ]),
        transition(':leave', [
          animate('300ms ease-in', style({ opacity: 0 })),
        ]),
      ]),
    ]
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = false;
  @Input() showXpMenu: boolean = false;
  @Input() showSkillMenu: boolean = false;
  @Input() showCertMenu: boolean = false;
  @Input() showEducationMenu: boolean = false;
  @Input() showProjectMenu: boolean = false;
  isExpanded: boolean = false;

  subSidebarToggle = () => !this.isExpanded;
  
  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
