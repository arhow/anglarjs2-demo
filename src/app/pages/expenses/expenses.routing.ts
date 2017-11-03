import { Routes, RouterModule }  from '@angular/router';

import { Expenses } from './expenses.component';
import { ExpensesSalerSummary } from './components/expensesSalerSummary/expensesSalerSummary.component';
import { ExpensesSalerCustomerSummary } from './components/expensesSalerCustomerSummary/expensesSalerCustomerSummary.component';
import { ExpensesDetail } from './components/expensesDetail/expensesDetail.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Expenses,
    children:[
      { path: 'expensessalersummary',  component:  ExpensesSalerSummary},
      { path: 'expensessalercustomersummary/:salerId/:saler', component: ExpensesSalerCustomerSummary},
      { path: 'expensesdetail/:salerId/:customerId/:customer', component : ExpensesDetail},
      { path: '', redirectTo: 'expensessalersummary', pathMatch: 'full' }
    ]
  
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
