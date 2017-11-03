import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, ExpensesService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CONSTANT} from '../../../../constant/index';

@Component({
  selector: 'expensesdetail',
  templateUrl: './expensesDetail.html',
  styleUrls: ['./expensesDetail.scss'],
})
export class ExpensesDetail {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public salerId;
    public customerId;
    public customer;
    public hint;

    constructor(private expensesService : ExpensesService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // set hint
        this.hint = CONSTANT.HINT.DATE_FORMAT;

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        this.route.params.subscribe(params => {
          this.customerId = params['customerId']; // (+) converts string 'id' to a number
          this.customer= params['customer'];
          this.salerId= params['salerId'];
        });

        // get saler detail setting
        this.settings = this.expensesService.getExpensesDetailSetting();

        // set title
        this.title = this.customer + CONSTANT.TITLE.EXPENSES_DETAIL_TABLE_TITLE;

        // get saler detail data
        this.getExpensesDetailData();
    }

    getExpensesDetailData(): void {
        // this.expensesService.getExpensesDetailData(this.customerId).subscribe(
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
            // this.expensesService.deleteExpensesData(this.salerId, this.customerId, event.data).subscribe(
            //     result => {
            //         if (result == true) {
            //             event.confirm.resolve();
            //             // delete succeeded
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
            // this.expensesService.updateExpensesData(this.salerId, this.customerId, event.newData).subscribe(
            //     result => {
            //         if (result != null) {
            //             // delete succeeded
            //             event.confirm.resolve(result);
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
            // this.expensesService.newExpensesData(this.salerId, this.customerId, event.newData).subscribe(
            //     result => {
            //         if (result != null) {

            //             // new succeeded
            //             // event.newData["expensesId"] = result;
            //             // event.confirm.resolve(event.newData);
            //             event.confirm.resolve(result);
            //             this.alertService.info(CODE.INFO.CREATE_SUCCEEDED, true);
            //         } 
            //         else {
            //             // new failed
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
