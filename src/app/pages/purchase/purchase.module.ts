import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { DatePickerModule } from 'ng2-datepicker';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { Purchase } from './purchase.component';
import { routing } from './purchase.routing';
import { VendorSummary } from './components/vendorSummary/vendorSummary.component';
import { PurchaseDetail } from './components/purchaseDetail/purchaseDetail.component';




import {CalendarCell, ImgPreviewCell, UploadCell, DefaultModal} from './components/purchaseDetail/cells/index';


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
    Purchase,
    VendorSummary,
    PurchaseDetail,
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
export class PurchaseModule {}
