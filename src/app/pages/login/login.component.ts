import {Component,Inject} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Routes} from '@angular/router';
import {AuthenticationService, AlertService} from '../../services/index';
import {CODE} from '../../code/index';
import {CONSTANT} from '../../constant/index';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public account:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public systemName:string;
  constructor(private fb : FormBuilder,
  private router : Router, 
  private authenticationService: AuthenticationService,
  private alertService: AlertService) {

    this.form = fb.group({
      account : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      password : ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.account = this.form.controls[CONSTANT.KEYWORD.ACCOUNT];
    this.password = this.form.controls[CONSTANT.KEYWORD.PASSWORD];
    this.systemName = "财务管理系统";
    // get system name
    // this.authenticationService.getSystemName().subscribe(
    //   result => {
    //     if (result != null){
    //       this.systemName = result;
    //     }
    //     else{
    //       //  get response but no systemname in response body show error nav to login page
    //       this.alertService.error(CODE.ERROR.NO_RESPONSE, true);
    //       this.router.navigate(['/']);
    //     }
    //   },
    //   error =>  {
    //     //  not get response show error nav to login page
    //     this.alertService.error(CODE.ERROR.NO_RESPONSE, true);
    //     this.router.navigate(['/error'], {queryParams:{error: error}});
    //   }
    // );

    // reset login status
    this.authenticationService.logout();
  }

  public login():void {
    this.submitted = true;
    
    if (this.form.valid) {
      
      let account = this.form.get(CONSTANT.KEYWORD.ACCOUNT).value;
      let password = this.form.get(CONSTANT.KEYWORD.PASSWORD).value;
      localStorage.setItem(CONSTANT.KEYWORD.JWT, "1");
      localStorage.setItem(CONSTANT.KEYWORD.USER_ID, "1");
      localStorage.setItem(CONSTANT.KEYWORD.ROLE_ID, "1");
      localStorage.setItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID, "1");
      this.router.navigate([CONSTANT.PAGES.DASHBOARD]);

      // this.authenticationService.verifyUser(account, password, companyId)
      //   .subscribe(
      //     result => {
      //       if (result == true) {
      //         // nav to dashboard
      //         this.router.navigate([CONSTANT.PAGES.DASHBOARD]);

      //       } else {
      //           this.alertService.warning(CODE.WARNING.LOG_IN_FAILED);
      //           this.submitted = false;
      //       }
      //     },
      //     error =>  {
      //       this.alertService.error(CODE.ERROR.NO_RESPONSE);
      //       //this.router.navigate(['/']);
      //     });
    }
  }

  public logout() : void {
        // reset login status
        this.authenticationService.logout();
  }
}
