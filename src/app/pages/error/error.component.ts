import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {CODE} from '../../code/index';
import { BaMenuService} from '../../theme';

@Component({
  selector: 'errorpage',
  templateUrl: './error.html',
  styleUrls: ['./error.scss']
})
export class Error {

  private content: any;

  constructor(private route: ActivatedRoute,private router: Router,) {

    //this.content = this.route.snapshot.queryParams['error'];
  }

  private ngOnInit() {
    // this.sub = this.route.queryParams.subscribe(params => {
    //   this.content = "404"; // (+) converts string 'id' to a number
    // });

  }

  private ngOnDestroy() {
  }

  public goLoginPage(){
    this.router.navigate(['/login']);
  }

  
}
