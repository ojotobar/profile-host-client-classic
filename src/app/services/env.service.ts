import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
    coreServerUrl = (window as any).__env?.BACK_END_SERVER_URL || '';
    apiKey = (window as any).__env?.X_PPAPI_KEY || ''
}
