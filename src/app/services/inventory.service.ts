import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_INVENTORY_SETTING,} from '../role/index';

@Injectable()
export class InventoryService {
    
    constructor(private http: Http,
                private router: Router) {

    }

    getInventorySetting(): any {

        let roleId = CONSTANT.MENU.MANAGER;
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_INVENTORY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return null;
        }
        else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
            return null;
        }
        else if (roleId == CONSTANT.MENU.SALES_MANAGER){
            return null;
        }
        else if (roleId == CONSTANT.MENU.SALER){
            return null;
        }
        else{
            return null;
        }
    }

    getInventoryData(): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
            }
        });

        return this.http.get(CONSTANT.URL.GET_INVENTORY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().inventory_data;
                }
                else if (response.status == CODE.HTTPSTATUS.NO_CONTENT){
                    return null;
                }
                else{
                    return null;
                }    
            }).catch((error : Response | any) => {
                return Observable.throw(error);
            }
        );
    }

}