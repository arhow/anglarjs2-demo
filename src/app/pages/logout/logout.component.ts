import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService, AlertService} from '../../services/index';

@Component({
  selector: 'logout',
  template: ``,
})
export class Logout {
  constructor(private router : Router, 
              private authenticationService: AuthenticationService) {
      authenticationService.logout();
      this.router.navigate(['/']);
  }
}
