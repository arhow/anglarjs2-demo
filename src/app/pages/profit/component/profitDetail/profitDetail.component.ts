import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, ProfitService } from '../../../../services/index';
import { BaMenuService } from '../../../../theme';
import { CODE} from '../../../../code/index';
import { CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'profitdetail',
  templateUrl: './profitDetail.html',
  styleUrls: ['./profitDetail.scss']
})
export class ProfitDetail {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public salerId;
    public customerId;
    public customer;

    constructor(private profitService : ProfitService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get profit detail setting
        this.settings = this.profitService.getProfitDetailSetting();

        this.route.params.subscribe(params => {
            this.salerId = params['salerId']; // (+) converts string 'id' to a number
            this.customer = params['customer'];
            this.customerId = params['customerId'];
          });

        // set title
        this.title = this.customer + CONSTANT.TITLE.PROFIT_DETAIL_TABLE_TITLE;

        // get profit detail data
        this.getProfitDetailData();
    }

    getProfitDetailData(): void {

        // this.profitService.getProfitDetailData(this.salerId, this.customerId).subscribe(
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

}
