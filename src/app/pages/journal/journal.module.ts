import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Journal,} from './journal.component';
import { JournalSummary } from './component/journalSummary/journalSummary.component';
import { JournalDetail } from './component/journalDetail/journalDetail.component';
import { routing } from './journal.routing';


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
    Journal,
    JournalSummary,
    JournalDetail,
  ],
  providers: [
  ]
})
export class JournalModule {}
