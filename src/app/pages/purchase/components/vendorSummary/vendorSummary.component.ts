import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, SalesService, PurchaseService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'vendorsummary',
  templateUrl: './vendorSummary.html',
  styleUrls: ['./vendorSummary.scss']
})
export class VendorSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();

    constructor(private purchaseService : PurchaseService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get vendor summary setting
        this.settings = this.purchaseService.getVendorSummarySetting();

        // set title
        this.title = CONSTANT.TITLE.VENDOR_SUMMARY_TABLE_TITLE;

        // get vendor summary data
        this.getVendorSummaryData();
    }

    getVendorSummaryData(): void {
        // this.purchaseService.getVendorSummaryData().subscribe(
        //     result => {
        //         if (result != null) {
        //             this.source.load(result);
        //         } else {
        //         }
        //     },
        //     error => {
        //         this.alertService.error(CODE.ERROR.BACKEND_ERROR, true);
        //         this.router.navigate(['/error'], {queryParams:{error: error}});
        //     }
        // );
    }

    onUserRowSelect(event): void {
        this.router.navigate(['/pages/purchase/purchasedetail'],{queryParams:{vendorId:event.data.vendorId, vendor:event.data.vendor}});
    }
}
