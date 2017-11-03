import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {AuthenticationService} from '../../../services/index';


@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  public systemName:string;

  constructor(private _state:GlobalState, private authenticationService : AuthenticationService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.systemName =  "财务管理系统";

    // this.authenticationService.getSystemName().subscribe(
    //   result => {
    //     if (result != null){
    //       this.systemName =  result;
    //     }
    //     else{
          
    //     }
    //   },
    //   error =>  {
    //       //this.router.navigate(['error'],{ queryParams: { content: error._body } }); //
    //   }
    // );

  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
