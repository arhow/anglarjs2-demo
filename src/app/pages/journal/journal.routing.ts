import { Routes, RouterModule }  from '@angular/router';

import { Journal } from './journal.component';
import { JournalSummary } from './component/journalSummary/journalSummary.component';
import { JournalDetail } from './component/journalDetail/journalDetail.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Journal,
    children:[
        { path: 'journalsummary',  component:  JournalSummary},
        { path: 'journaldetail', component: JournalDetail},
        { path: '', redirectTo: 'journalsummary', pathMatch: 'full' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
