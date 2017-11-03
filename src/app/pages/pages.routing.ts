import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

import { AuthGuard } from '../guards/index';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'error',
    loadChildren: 'app/pages/error/error.module#ErrorModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'logout', loadChildren: './logout/logout.module#LogoutModule', canActivate: [AuthGuard] },
      { path: 'sales', loadChildren: './sales/sales.module#SalesModule', canActivate: [AuthGuard] },
      { path: 'purchase', loadChildren: './purchase/purchase.module#PurchaseModule', canActivate: [AuthGuard] },
      { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule', canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule', canActivate: [AuthGuard] },
      { path: 'journal', loadChildren: './journal/journal.module#JournalModule', canActivate: [AuthGuard] },
      { path: 'profit', loadChildren: './profit/profit.module#ProfitModule', canActivate: [AuthGuard] },
      { path: 'management', loadChildren: './management/management.module#ManagementModule', canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
