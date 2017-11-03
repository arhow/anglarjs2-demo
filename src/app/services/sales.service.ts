import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_SALER_SUMMARY_SETTING,
    ACCOUNTANT_SALER_SUMMARY_SETTING,
    SALES_MANAGER_SALER_SUMMARY_SETTING,
    SALER_SALER_SUMMARY_SETTING,
    MANAGER_SALER_CUSTOMER_SUMMARY_SETTING,
    ACCOUNTANT_SALER_CUSTOMER_SUMMARY_SETTING,
    SALES_MANAGER_SALER_CUSTOMER_SUMMARY_SETTING,
    SALER_SALER_CUSTOMER_SUMMARY_SETTING,
    MANAGER_SALES_DETAIL_SETTING,
    ACCOUNTANT_SALES_DETAIL_SETTING,
    SALES_MANAGER_SALES_DETAIL_SETTING,
    SALER_SALES_DETAIL_SETTING,} from '../role/index';

    


@Injectable()
export class SalesService {
    
    constructor(private http: Http,
                private router: Router) {

    }


    getSalerSummarySetting(): any {

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_SALER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_SALER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
            return null;
        }
        else if (roleId == CONSTANT.MENU.SALES_MANAGER){
            return SALES_MANAGER_SALER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.SALER){
            return SALER_SALER_SUMMARY_SETTING;
        }
        else{
            return null;
        }
    }

    getSalerSummaryData(): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                roleId: roleId,
                referenceRoleId: referenceRoleId,
                jwt: jwt,
            }
        });

        return this.http.get(CONSTANT.URL.GET_SALER_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().saler_summary_data;
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

    getSalerCustomerSummarySetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_SALER_CUSTOMER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_SALER_CUSTOMER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
            return null;
        }
        else if (roleId == CONSTANT.MENU.SALES_MANAGER){
            return SALES_MANAGER_SALER_CUSTOMER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.SALER){
            return SALER_SALER_CUSTOMER_SUMMARY_SETTING;
        }
        else{
            return null;
        }
    }

    getSalerCustomerSummaryData(salerId: string): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_SALER_CUSTOMER_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().saler_customer_summary_data;
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

    getSalesDetailSetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_SALES_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_SALES_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
            return null;
        }
        else if (roleId == CONSTANT.MENU.SALES_MANAGER){
            return SALES_MANAGER_SALES_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.SALER){
            return SALER_SALES_DETAIL_SETTING;
        }
        else{
            return null;
        }
    }

    getSalesDetailData(customerId: string): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                customerId: customerId,
                referenceRoleId: referenceRoleId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_SALES_DETAIL_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().sales_detail_data;
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

    newSalesData(salerId:any, customerId:any, record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                salerId: salerId,
                customerId: customerId,
                roleId: roleId,
            }
        });

        return this.http.get(CONSTANT.URL.NEW_SALES, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json();
                }
                else if (response.status == CODE.HTTPSTATUS.NO_CONTENT){
                    // if failed 
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

    updateSalesData(salerId:any, customerId:any, record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                salerId: salerId,
                customerId: customerId,
                roleId: roleId,
            }
        });

        return this.http.get(CONSTANT.URL.UPDATE_SALES, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json();
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

    deleteSalesData(salerId: any, customerId: any, record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                salerId: salerId,
                customerId: customerId,
                roleId: roleId,
            }
        });

        return this.http.get(CONSTANT.URL.DELETE_SALES, options).map(
            (response: Response) => {

                if (response.status == CODE.HTTPSTATUS.OK){
                    return true;
                }
                else if (response.status == CODE.HTTPSTATUS.NO_CONTENT){
                    return false;
                }
                else{
                    return false;
                }
            }).catch((error : Response | any) => {
                return Observable.throw(error);
            }
        );
    }

}