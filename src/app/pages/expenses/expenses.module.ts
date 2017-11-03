import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { DatePickerModule } from 'ng2-datepicker';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { Expenses } from './expenses.component';
import { ExpensesSalerSummary } from './components/expensesSalerSummary/expensesSalerSummary.component';
import { ExpensesSalerCustomerSummary } from './components/expensesSalerCustomerSummary/expensesSalerCustomerSummary.component';
import { ExpensesDetail } from './components/expensesDetail/expensesDetail.component';
import { routing } from './expenses.routing';




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
    Expenses,
    ExpensesSalerSummary,
    ExpensesSalerCustomerSummary,
    ExpensesDetail,
  ],
  entryComponents: [
  ],
})
export class ExpensesModule {}
