import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, DashboardService } from '../../../services/index';
import { BaMenuService } from '../../../theme';
import {CODE} from '../../../code/index';
import {CONSTANT} from '../../../constant/index';

@Component({
  selector: 'dashboardpurchasesummary',
  templateUrl: './dashboardPurchaseSummary.html',
  styleUrls: ['./dashboardPurchaseSummary.scss'],
})
export class DashboardPurchaseSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public companyId;
    public isShow;

    constructor(private dashboardService : DashboardService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // get saler detail setting
        this.settings = this.dashboardService.getDashboardPurchaseSummarySetting();

        // set show or not
        this.isShow = this.settings != null;

        if (this.isShow == true){
            // set title
            this.title = CONSTANT.TITLE.DASHBOARD_PURCHASE_SUMMARY_TABLE_TITLE;
    
            // get inventory summary
            this.getDashboardPurchaseSummaryData();
        }

    }

    getDashboardPurchaseSummaryData(): void {
        // this.dashboardService.getDashboardPurchaseSummaryData().subscribe(
        //     result => {
        //         if (result != null) {
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
}
