import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_EXPENSES_SALER_SUMMARY_SETTING,
    ACCOUNTANT_EXPENSES_SALER_SUMMARY_SETTING,
    MANAGER_EXPENSES_SALER_CUSTOMER_SUMMARY_SETTING,
    ACCOUNTANT_EXPENSES_SALER_CUSTOMER_SUMMARY_SETTING,
    MANAGER_EXPENSES_DETAIL_SETTING,
    ACCOUNTANT_EXPENSES_DETAIL_SETTING} from '../role/index';

@Injectable()
export class ExpensesService {
    
    constructor(private http: Http,
                private router: Router) {

    }

    getExpensesSalerSummarySetting(): any {

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);
        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_EXPENSES_SALER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_EXPENSES_SALER_SUMMARY_SETTING;
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

    getExpensesSalerSummaryData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_EXPENSES_SALER_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().expenses_saler_summary_data;
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

    getExpensesSalerCustomerSummarySetting(): any{

        let roleId = CONSTANT.MENU.MANAGER;
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_EXPENSES_SALER_CUSTOMER_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_EXPENSES_SALER_CUSTOMER_SUMMARY_SETTING;
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

    getExpensesSalerCustomerSummaryData(salerId: string): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                salerId: salerId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_EXPENSES_SALER_CUSTOMER_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().expenses_saler_customer_summary_data;
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

    getExpensesDetailSetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);
        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_EXPENSES_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_EXPENSES_DETAIL_SETTING;
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

    getExpensesDetailData(customerId: string): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                customerId: customerId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_EXPENSES_DETAIL_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().expenses_detail_data;
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

    newExpensesData(salerId:any, customerId:any, record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                salerId: salerId,
                customerId: customerId,
            }
        });

        return this.http.get(CONSTANT.URL.NEW_EXPENSES, options).map(
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

    updateExpensesData(salerId:any, customerId:any, record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                salerId: salerId,
                customerId: customerId,
            }
        });

        return this.http.get(CONSTANT.URL.UPDATE_EXPENSES, options).map(
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

    deleteExpensesData(salerId: any, customerId: any, record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                salerId: salerId,
                customerId: customerId,
            }
        });

        return this.http.get(CONSTANT.URL.DELETE_EXPENSES, options).map(
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