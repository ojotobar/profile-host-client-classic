import { InjectionToken } from '@angular/core';
import { BuildVariables } from './entities/interfaces/build-variables-interface';

export const BUILD_VARIABLES = new InjectionToken<BuildVariables>('Build Variables');
