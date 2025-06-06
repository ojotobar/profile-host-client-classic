import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { EnvService } from './services/env.service';
import { ApolloLink, DefaultOptions, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideHttpClient(),
    provideApollo(() => {
      const envService = inject(EnvService)
      const apiKey = envService.apiKey
      const httpLink = inject(HttpLink);
    
      const defaultOptions: DefaultOptions = {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      }
    
      const authLink = setContext((operation, context) => {
        return {
          headers: {
            'X-PPAPI-KEY': apiKey ?? '',
            'GraphQL-Preflight': 1,
          },
        };
      });

      const link = ApolloLink.from([
        authLink,
        httpLink.create({ uri: envService.apiUrl }),
      ]);

      return {
        link,
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions
      };
    })
  ]
};