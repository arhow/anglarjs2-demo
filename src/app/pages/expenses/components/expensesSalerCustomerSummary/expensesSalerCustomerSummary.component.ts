import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, ExpensesService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import {CODE} from '../../../../code/index';
import {CONSTANT} from '../../../../constant/index';

@Component({
  selector: 'expensessalercustomersummary',
  templateUrl: './expensesSalerCustomerSummary.html',
  styleUrls: ['./expensesSalerCustomerSummary.scss']
})
export class ExpensesSalerCustomerSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public salerId: string;
    public saler: string;

  constructor(private expensesService : ExpensesService,
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
        this.title = this.saler + CONSTANT.TITLE.EXPENSES_SALER_CUSTOMER_SUMMARY_TABLE_TITLE;
        
        // get saler summary setting
        this.settings = this.expensesService.getExpensesSalerCustomerSummarySetting();

        this.getExpensesSalerCustomerSummaryData(this.salerId);

  }

  getExpensesSalerCustomerSummaryData(salerId:any):void {

        // // get saler summary data
        // this.expensesService.getExpensesSalerCustomerSummaryData(this.salerId).subscribe(
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
      this.router.navigate(['/pages/expenses/expensesdetail', this.salerId, event.data.customerId, event.data.customer]);
  }
}
