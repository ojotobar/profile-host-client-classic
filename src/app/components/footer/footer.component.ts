import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, SocialsComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
