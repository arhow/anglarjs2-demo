import { Routes, RouterModule }  from '@angular/router';

import { Sales } from './sales.component';
import { ModuleWithProviders } from '@angular/core';
import { SalerSummary } from './components/salerSummary/salerSummary.component';
import { SalerCustomerSummary } from './components/salerCustomerSummary/salerCustomerSummary.component';
import { SalesDetail } from './components/salesDetail/salesDetail.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Sales,
    children:[
      { path: 'salersummary',  component:  SalerSummary},
      { path: 'salercustomersummary/:salerId/:saler', component: SalerCustomerSummary},
      { path: 'salesdetail/:salerId/:customerId/:customer', component : SalesDetail},
      { path: '', redirectTo: 'salersummary', pathMatch: 'full' }
    ]
  
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
