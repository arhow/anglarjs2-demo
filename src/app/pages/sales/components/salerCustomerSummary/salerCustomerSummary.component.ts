import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, SalesService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CONSTANT} from '../../../../constant/index';

@Component({
  selector: 'salercustomersummary',
  templateUrl: './salerCustomerSummary.html',
  styleUrls: ['./salerCustomerSummary.scss']
})
export class SalerCustomerSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public salerId: string;
    public saler: string;

  constructor(private salesService : SalesService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());
        this.route.params.subscribe(params => {
          this.salerId = params['salerId']; // (+) converts string 'id' to a number
          this.saler = params['saler'];
        });

        // set title
        this.title = this.saler + CONSTANT.TITLE.SALER_CUSTOMER_SUMMARY_TABLE_TITLE;
        
        // get saler summary setting
        this.settings = this.salesService.getSalerCustomerSummarySetting();

        this.getSalerCustomerSummaryData(this.salerId);
  }

  getSalerCustomerSummaryData(salerId:any):void{

    // // get saler summary data
    // this.salesService.getSalerCustomerSummaryData(this.salerId).subscribe(
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

  onUserRowSelect(event): void {
      this.router.navigate(['/pages/sales/salesdetail', this.salerId, event.data.customerId, event.data.customer]);
  }
}
