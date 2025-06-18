import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialsComponent } from '../socials/socials.component';
import { EnvService } from '../../services/env.service';
import { SocialMedia } from '../../entities/models/profile-models';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, SocialsComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  @Input() name: string = '';
  @Input() socialMedia: SocialMedia[] = [];
  @Input() heading: string = '';
  version: string = '';
  currentYear = new Date().getFullYear();

  constructor(private readonly envService: EnvService){
    this.version = this.envService.version
  }
}
