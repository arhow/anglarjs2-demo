import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { Management } from './management.component';
import { routing } from './management.routing';
import { UserManagement } from './components/usermanagement/userManagement.component';
import { SalerCustomerRlsManagement} from './components/customermanagement/salercustomerrlsmanagement/salercustomerrlsmanagement.component';
import { CustomerManagement } from './components/customermanagement/customermanagement/customermanagement.component';
import { VendorManagement } from './components/vendormanagement/vendorManagement.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    Ng2SmartTableModule,
  ],
  declarations: [
      Management,
      UserManagement,
      SalerCustomerRlsManagement,
      CustomerManagement,
      VendorManagement,
  ],
  entryComponents: [
  ],
})
export class ManagementModule {}
