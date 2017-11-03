import { Routes, RouterModule }  from '@angular/router';

import { Inventory } from './inventory.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '**',
    component: Inventory,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
