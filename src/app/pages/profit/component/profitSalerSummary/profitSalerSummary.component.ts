import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, ProfitService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'profitsalersummary',
  templateUrl: './profitSalerSummary.html',
  styleUrls: ['./profitSalerSummary.scss']
})
export class ProfitSalerSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();

    constructor(private profitService : ProfitService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get saler summary setting
        this.settings = this.profitService.getProfitSalerSummarySetting();

        // set title
        this.title = CONSTANT.TITLE.PROFIT_SALER_SUMMARY_TABLE_TITLE;

        // get saler summary data
        this.getProfitSalerSummaryData();
    }

    getProfitSalerSummaryData(): void {

        // this.profitService.getProfitSalerSummaryData().subscribe(
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
        this.router.navigate(['/pages/profit/profitsalercustomersummary', event.data.salerId, event.data.saler]);
    }
}
