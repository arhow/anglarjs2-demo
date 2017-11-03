import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Dashboard,} from './dashboard.component';
import { DashboardInventorySummary } from './inventorySummary/dashboardInventorySummary.component';
import { DashboardJournalSummary } from './journalSummary/dashboardJournalSummary.component';
import { DashboardMismatchingOrders } from './mismatchingOrders/dashboardMismatchingOrders.component';
import { DashboardProfitSummary } from './profitSummary/dashboardProfitSummary.component';
import { DashboardPurchaseSummary } from './purchaseSummary/dashboardPurchaseSummary.component';
import { DashboardSalesSummary } from './salesSummary/dashboardSalesSummary.component';
import { routing } from './dashboard.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Dashboard,
    DashboardInventorySummary,
    DashboardJournalSummary,
    DashboardMismatchingOrders,
    DashboardProfitSummary,
    DashboardPurchaseSummary,
    DashboardSalesSummary,
  ],
  providers: [
  ]
})
export class DashboardModule {}
