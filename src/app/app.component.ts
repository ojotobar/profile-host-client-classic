import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    SidebarComponent, 
    TopbarComponent, 
    MatIconModule,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'David Williams';
  isSidebarOpen: boolean = false;
  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.setDefaultThemeByTime();
  }
}
