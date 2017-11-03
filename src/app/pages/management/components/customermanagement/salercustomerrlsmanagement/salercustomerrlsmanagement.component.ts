import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthenticationService, AlertService, ManagementService } from '../../../../../services/index';
import { BaMenuService } from '../../../../../theme';
import {CODE} from '../../../../../code/index';
import {CONSTANT} from '../../../../../constant/index';

@Component({
  selector: 'salercustomerrlsmanagement',
  templateUrl: './salercustomerrlsmanagement.html',
  styleUrls: ['./salercustomerrlsmanagement.scss'],
})
export class SalerCustomerRlsManagement {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public hint;
    public companyId;

    constructor(private managementService : ManagementService,
                private authenticationService: AuthenticationService,
                private menuService: BaMenuService, 
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) {

        // set hint
        this.hint = CONSTANT.HINT.DATE_FORMAT;

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get saler detail setting
        this.settings = this.managementService.getSalerCustomerRlsManagementSetting();

        // set title
        this.title = CONSTANT.TITLE.SALER_CUSTOMER_RLS_MANAGEMENT_TABLE_TITLE;


        // get saler detail data
        this.getSalerCustomerRlsData();
    }

    getSalerCustomerRlsData(): void {
        // this.managementService.getSalerCustomerRlsData().subscribe(
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
        this.router.navigate(['/pages/management/customermanagement', event.data.userId, event.data.name]);
    }
}
