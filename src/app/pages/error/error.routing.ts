import { Routes, RouterModule }  from '@angular/router';

import { Error } from './error.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Error
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
