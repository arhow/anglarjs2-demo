import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, PurchaseService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CalendarCell, ImgPreviewCell, UploadCell} from './cells/index';
import {CONSTANT} from '../../../../constant/index';

@Component({
  selector: 'purchasedetail',
  templateUrl: './purchaseDetail.html',
  styleUrls: ['./purchaseDetail.scss']
})
export class PurchaseDetail {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public vendorId;
    public vendor;
    public hint;

    constructor(private purchaseService : PurchaseService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // set hint
        this.hint = CONSTANT.HINT.DATE_FORMAT;

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        this.vendorId = this.route.snapshot.queryParams['vendorId'];
        this.vendor = this.route.snapshot.queryParams['vendor'];

        // get saler detail setting
        this.settings = this.purchaseService.getPurchaseDetailSetting();

        // set title
        this.title = this.vendor + CONSTANT.TITLE.PURCHASE_DETAIL_TABLE_TITLE;

        // get saler detail data
        this.getPurchaseDetailData();
    }

    getPurchaseDetailData(): void {
        // this.purchaseService.getPurchaseDetailData(this.vendorId).subscribe(
        //     result => {
        //         if (result != null) {
        //             //this.source.load(result.json().saler_summary_data);
        //             this.source.load(result);
        //         } else {
        //         }
        //     },
        //     error => {
        //         this.alertService.error(CODE.ERROR.BACKEND_ERROR,true);
        //         this.router.navigate(['/error'], {queryParams:{error: error}});
        //     }
        // );
    }

    onDeleteConfirm(event): void {
        if (window.confirm(CONSTANT.MESSAGE.DELETE_CONFIRM)) {
            event.confirm.resolve();
            // this.purchaseService.deletePurchaseData(this.vendorId, event.data).subscribe(
            //     result => {
            //         if (result == true) {
            //             // delete succeeded
            //             event.confirm.resolve();
            //             this.alertService.info(CODE.INFO.DELETE_SUCCEEDED, true);
            //         } 
            //         else {
            //             // delete failed
            //             event.confirm.reject();
            //             this.alertService.warning(CODE.WARNING.DELETE_FAILED, true);
            //         }
            //     },
            //     error => {
            //         event.confirm.reject();
            //         this.alertService.error(CODE.ERROR.BACKEND_ERROR, true);
            //         this.router.navigate(['/error'], {queryParams:{error: error}});
            //     }
            // );
        }
    }

    onSaveConfirm(event): void {
        if (window.confirm(CONSTANT.MESSAGE.UPDATE_CONFIRM)) {
            event.confirm.resolve();
            // this.purchaseService.updatePurchaseData(this.vendorId, event.newData).subscribe(
            //     result => {
            //         if (result == true) {
            //             // delete succeeded
            //             event.confirm.resolve();
            //             this.alertService.info(CODE.INFO.SAVE_SUCCEEDED, true);
            //         } 
            //         else {
            //             // delete failed
            //             event.confirm.reject();
            //             this.alertService.warning(CODE.WARNING.SAVE_FAILED, true);
            //         }
            //     },
            //     error => {
            //         event.confirm.reject();
            //         this.alertService.error(CODE.ERROR.BACKEND_ERROR,true);
            //         this.router.navigate(['/error'], {queryParams:{error: error}});
            //     }
            // );
        }
    }

    onCreateConfirm(event): void {
        if (window.confirm(CONSTANT.MESSAGE.NEW_CONFIRM)) {
            event.confirm.resolve();
            // this.purchaseService.newPurchaseData(this.vendorId, event.newData).subscribe(
            //     result => {
            //         if (result == true) {
            //             // delete succeeded
            //             event.confirm.resolve();
            //             this.alertService.info(CODE.INFO.CREATE_SUCCEEDED, true);
            //         } 
            //         else {
            //             // delete failed
            //             event.confirm.reject();
            //             this.alertService.warning(CODE.WARNING.CREATE_FAILED, true);
            //         }
            //     },
            //     error => {
            //         event.confirm.reject();
            //         this.alertService.error(CODE.ERROR.BACKEND_ERROR,true);
            //         this.router.navigate(['/error'], {queryParams:{error: error}});
            //     }
            // );
        }
    }
}
