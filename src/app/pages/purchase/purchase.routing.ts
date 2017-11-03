import { Routes, RouterModule }  from '@angular/router';

import { Purchase } from './purchase.component';
import { ModuleWithProviders } from '@angular/core';
import { VendorSummary } from './components/vendorSummary/vendorSummary.component';
import { PurchaseDetail } from './components/purchaseDetail/purchaseDetail.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Purchase,
    children:[
      { path: 'vendorsummary',  component:  VendorSummary},
      { path: 'purchasedetail', component: PurchaseDetail},
      { path: '', redirectTo: 'vendorsummary', pathMatch: 'full' },
    ]
  
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
