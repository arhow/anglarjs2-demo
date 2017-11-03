import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { DatePickerModule } from 'ng2-datepicker';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { Profit } from './profit.component';
import { ProfitSalerSummary } from './component/profitSalerSummary/profitSalerSummary.component';
import { ProfitSalerCustomerSummary } from './component/profitSalerCustomerSummary/profitSalerCustomerSummary.component';
import { ProfitDetail } from './component/profitDetail/profitDetail.component';
import { routing } from './profit.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    Ng2SmartTableModule,
    DataTableModule,
    DatePickerModule,
    NgbModalModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    Profit,
    ProfitSalerSummary,
    ProfitSalerCustomerSummary,
    ProfitDetail,
  ],
  entryComponents: [
  ],
})
export class ProfitModule {}
