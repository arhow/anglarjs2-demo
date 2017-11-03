import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '',
    loadChildren: 'app/pages/login/login.module#LoginModule',
    pathMatch: 'full' },
  { path: '**', redirectTo: 'app/pages/login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
