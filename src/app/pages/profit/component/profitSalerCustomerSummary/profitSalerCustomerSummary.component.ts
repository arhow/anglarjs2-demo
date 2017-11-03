import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, ProfitService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import { CODE} from '../../../../code/index';
import { CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'profitsalercustomersummary',
  templateUrl: './profitSalerCustomerSummary.html',
  styleUrls: ['./profitSalerCustomerSummary.scss']
})
export class ProfitSalerCustomerSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public salerId;
    public saler;

    constructor(private profitService : ProfitService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get profit detail setting
        this.settings = this.profitService.getProfitSalerCustomerSummarySetting();

        this.route.params.subscribe(params => {
            this.salerId = params['salerId']; // (+) converts string 'id' to a number
            this.saler = params['saler'];
          });

        // set title
        this.title = this.saler + CONSTANT.TITLE.PROFIT_SALER_CUSTOMER_SUMMARY_TABLE_TITLE;

        // get profit detail data
        this.getProfitSalerCustomerSummaryData();
    }

    getProfitSalerCustomerSummaryData(): void {

        // this.profitService.getProfitSalerCustomerSummaryData(this.salerId).subscribe(
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
        this.router.navigate(['/pages/profit/profitdetail', event.data.customerId, event.data.customer, this.salerId]);
    }

}
