import { inject, Injectable } from '@angular/core';
import { BUILD_VARIABLES } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  private readonly variables$ = inject(BUILD_VARIABLES);

  get apiUrl(): string {
    return this.variables$.apiUrl;
  }

  get version(): string {
    return this.variables$.version;
  }

  get apiKey(): string {
    return (window as any).__env?.X_PPAPI_KEY || '';
  }
}
