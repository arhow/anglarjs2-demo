import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService, AlertService, InventoryService } from '../../services/index';
import { LocalDataSource } from 'ng2-smart-table';
import {BaMenuService} from '../../theme';
import {CODE} from '../../code/index';
import {CONSTANT} from '../../constant/index';


@Component({
  selector: 'inventory',
  styleUrls: ['./inventory.scss'],
  templateUrl: './inventory.html'
})
export class Inventory {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();

    constructor(private inventoryService : InventoryService,
        private authenticationService: AuthenticationService,
        private menuService: BaMenuService, 
        private router: Router,
        private alertService: AlertService) {



    // get menu
    this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());
        
        // get inventory setting
        this.settings = this.inventoryService.getInventorySetting();

        // set title
        this.title = CONSTANT.TITLE.INVENTORY_TABLE_TITLE;

        // get inventory data
        this.getInventoryData();

    }

    getInventoryData(): void {
        // this.inventoryService.getInventoryData().subscribe(
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
