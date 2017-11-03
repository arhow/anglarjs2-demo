import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_MENU, ACCOUNTANT_MENU, PURCHASE_MANAGER_MENU, SALES_MANAGER_MENU, SALER_MENU} from '../role/index';


@Injectable()
export class AuthenticationService {
    public jwt: string;
    constructor(private http: Http,
    private router: Router,
    @Inject(DOCUMENT) private document) {

        // set token if saved in local storage
        this.jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
    }

    verifyUser(account: string, password: string, companyId: string): Observable<any> {

        let options = new RequestOptions({
            params: {
                account: account,
                password: password,
                companyId: companyId
            }
        });

        return this.http.get(CONSTANT.URL.VERIFY_USER, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){

                    // set token property
                    this.jwt = response.json() && response.json().jwt;
                    let userId = response.json() && response.json().userId;
                    let roleId = response.json() && response.json().roleId;
                    let referenceRoleId = response.json() && response.json().referenceRoleId;
                    let vendorId = response.json() && response.json().vendorId;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(CONSTANT.KEYWORD.JWT, this.jwt);
                    localStorage.setItem(CONSTANT.KEYWORD.USER_ID, userId);
                    localStorage.setItem(CONSTANT.KEYWORD.ROLE_ID, roleId);
                    localStorage.setItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID, referenceRoleId);
                    
                    return true;

                }
                else if (response.status == CODE.HTTPSTATUS.NO_CONTENT){
                    return false;
                }
                else {
                    return false;
                }
                
    
            }).catch((error : Response | any) => {

                return Observable.throw(error);
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.jwt = null;
        localStorage.removeItem(CONSTANT.KEYWORD.JWT);
        localStorage.removeItem(CONSTANT.KEYWORD.USER_ID);
        localStorage.removeItem(CONSTANT.KEYWORD.COMPANY_ID);
        localStorage.removeItem(CONSTANT.KEYWORD.ROLE_ID);
        localStorage.removeItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);
    }

    getSystemName() : Observable<string> {

        // get system name
        // this.document.location.hostname
        let options = new RequestOptions({
            params: {domainName: this.document.location.hostname}
        });

        return this.http.get(CONSTANT.URL.GET_SYSTEM_NAME, options)
            .map((response: Response) => {

                if (response.status == CODE.HTTPSTATUS.OK){

                    // save companyId in localstorage
                    localStorage.setItem(CONSTANT.KEYWORD.COMPANY_ID, response.json() && response.json().companyId);
                    // set system name 
                    return response.json().companySystemName;

                }else if (response.status == CODE.HTTPSTATUS.NO_CONTENT) {
                    return  null;
                }

                return null;

            }).catch((error : Response | any) => {

                return Observable.throw(error);
            });
    }

    getMenu() : any {

        return MANAGER_MENU;

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        // if (roleId == CONSTANT.MENU.MANAGER){
        //     return MANAGER_MENU;
        // }
        // else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
        //     return ACCOUNTANT_MENU;
        // }
        // else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
        //     return PURCHASE_MANAGER_MENU;
        // }
        // else if (roleId == CONSTANT.MENU.SALES_MANAGER){
        //     return SALES_MANAGER_MENU;
        // }
        // else if (roleId == CONSTANT.MENU.SALER){
        //     return SALER_MENU;
        // }
        // else{
        //     return null;
        // }

        // let options = new RequestOptions({
        //     params: {
        //         jwt: localStorage.getItem(CONSTANT.KEYWORD.JWT), 
        //         userId : localStorage.getItem(CONSTANT.KEYWORD.USER_ID),
        //         rolerId : localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID),
        //     }
        // });

        // return this.http.get(CONSTANT.URL.GET_MENU, options)
        //     .map((response: Response) => {

        //         // return true to indicate successful login
        //         if (response.status == CODE.HTTPSTATUS.OK) {
                    
        //             return response.json() && response.json().menu;

        //         } else if (response.status == CODE.HTTPSTATUS.NO_CONTENT) {

        //         }
        //         return null;

        //     }).catch((error : Response | any) => {

        //         return Observable.throw(error);
        //     }
        // );
    }




}