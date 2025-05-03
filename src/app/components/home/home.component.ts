import { Component } from '@angular/core';
import { SummaryCardsComponent } from '../summary-cards/summary-cards.component';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-home',
  imports: [SummaryCardsComponent, SocialsComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
}
