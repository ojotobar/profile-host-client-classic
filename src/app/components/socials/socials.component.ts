import { Component, Input } from '@angular/core';
import { SocialMedia } from '../../entities/models/profile-models';

@Component({
  selector: 'app-socials',
  imports: [],
  templateUrl: './socials.component.html',
  styles: ``
})
export class SocialsComponent {
  @Input() data: SocialMedia[] = [];
}
