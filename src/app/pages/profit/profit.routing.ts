import { Routes, RouterModule }  from '@angular/router';

import { Profit } from './profit.component';
import { ProfitSalerSummary } from './component/profitSalerSummary/profitSalerSummary.component';
import { ProfitSalerCustomerSummary } from './component/profitSalerCustomerSummary/profitSalerCustomerSummary.component';
import { ProfitDetail } from './component/profitDetail/profitDetail.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Profit,
    children:[
      { path: 'profitsalersummary',  component:  ProfitSalerSummary},
      { path: 'profitsalercustomersummary/:salerId/:saler', component: ProfitSalerCustomerSummary},
      { path: 'profitdetail/:customerId/:customer/:salerId', component: ProfitDetail},
      { path: '', redirectTo: 'profitsalersummary', pathMatch: 'full' }
    ]
  
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
