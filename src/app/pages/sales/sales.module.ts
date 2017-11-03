import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { DatePickerModule } from 'ng2-datepicker';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { Sales } from './sales.component';
import { routing } from './sales.routing';

import { SalerSummary } from './components/salerSummary/salerSummary.component';
import { SalerCustomerSummary } from './components/salerCustomerSummary/salerCustomerSummary.component';
import { SalesDetail } from './components/salesDetail/salesDetail.component';

import {CalendarCell, ImgPreviewCell, UploadCell, DefaultModal} from './components/salesDetail/cells/index';


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
    Sales,
    SalerSummary,
    SalerCustomerSummary,
    SalesDetail,
    CalendarCell,
    ImgPreviewCell,
    UploadCell,
    DefaultModal,
  ],
  entryComponents: [
    CalendarCell,
    ImgPreviewCell,
    UploadCell,
    DefaultModal,
  ],
})
export class SalesModule {}
