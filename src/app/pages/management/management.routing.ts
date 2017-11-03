import { Routes, RouterModule }  from '@angular/router';

import { Management } from './management.component';
import { ModuleWithProviders } from '@angular/core';

import { UserManagement } from './components/usermanagement/userManagement.component'
import { CustomerManagement } from './components/customermanagement/customermanagement/customermanagement.component';
import { SalerCustomerRlsManagement} from './components/customermanagement/salercustomerrlsmanagement/salercustomerrlsmanagement.component';
import { VendorManagement } from './components/vendormanagement/vendorManagement.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Management,
    children:[
      { path: 'usermanagement',  component:  UserManagement},
      { path: 'customermanagement/:salerId/:saler',  component:  CustomerManagement},
      { path: 'salercustomerrlsmanagement',  component:  SalerCustomerRlsManagement},
      { path: 'vendormanagement',  component:  VendorManagement},
      { path: '', redirectTo: 'usermanagement', pathMatch: 'full' }
    ]
  
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
