import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { BUILD_VARIABLES } from './app/tokens';
import { BuildVariables } from './app/entities/interfaces/build-variables-interface';

function fetchBuildVariables(): Promise<BuildVariables> {
  return fetch('/assets/env/build-variables.json')
    .then((res) => {
      if (!res.ok) throw new Error('Config not found');
      return res.json();
    })
    .catch(() => {
      console.warn('⚠️ build-variables.json not found, using fallback.');
      return {
        version: 'Dev Version',
        apiUrl: 'https://localhost:7051/profilesql',
      };
    });
}

fetchBuildVariables().then((buildVars) => {
  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers || []),
      { provide: BUILD_VARIABLES, useValue: buildVars },
    ],
  }).catch((err) => console.error(err));
});