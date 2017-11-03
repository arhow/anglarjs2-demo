import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {BaMenuService} from '../../theme';
import {CONSTANT} from '../../constant/index';


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor(private authenticationService: AuthenticationService,
              private router : Router, 
              private menuService: BaMenuService,) {

    // get menu
    this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());

  }

}
