import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, SalesService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'salersummary',
  templateUrl: './salerSummary.html',
  styleUrls: ['./salerSummary.scss']
})
export class SalerSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();

    constructor(private salesService : SalesService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get saler summary setting
        this.settings = this.salesService.getSalerSummarySetting();

        // set title
        this.title = CONSTANT.TITLE.SALER_SUMMARY_TABLE_TITLE;

        // get saler summary data
        this.getSalerSummaryData();
    }

    getSalerSummaryData(): void {
        // this.salesService.getSalerSummaryData().subscribe(
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
        this.router.navigate(['/pages/sales/salercustomersummary', event.data.salerId, event.data.saler]);
    }
}
