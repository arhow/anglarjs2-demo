import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_PROFIT_SALER_CUSTOMER_SUMMARY_SETTING,
    MANAGER_PROFIT_SALER_SUMMARY_SETTING,
    MANAGER_PROFIT_DETAIL_SETTING,} from '../role/index';

@Injectable()
export class ProfitService {
    
    constructor(private http: Http,
                private router: Router) {

    }

    getProfitSalerSummarySetting(): any {

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_PROFIT_SALER_SUMMARY_SETTING;
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

    getProfitSalerSummaryData(): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                referenceRoleId: referenceRoleId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_PROFIT_SALER_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().profit_saler_summary_data;
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

    getProfitSalerCustomerSummarySetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_PROFIT_SALER_CUSTOMER_SUMMARY_SETTING;
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

    getProfitSalerCustomerSummaryData(salerId: string): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                salerId: salerId,
                referenceRoleId: referenceRoleId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_PROFIT_SALER_CUSTOMER_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().profit_saler_customer_summary_data;
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

    getProfitDetailSetting(): any{
        
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_PROFIT_DETAIL_SETTING;
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

    getProfitDetailData(salerId: string, customerId: string): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                salerId: salerId,
                customerId: customerId,
                referenceRoleId: referenceRoleId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_PROFIT_DETAIL_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().profit_detail_data;
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