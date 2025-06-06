import { inject, Injectable } from '@angular/core';
import { BUILD_VARIABLES } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  get apiKey(): string {
    return (window as any).__env?.X_PPAPI_KEY || ''
  }
}
