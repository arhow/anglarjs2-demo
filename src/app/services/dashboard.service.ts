import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_DASHBOARD_INVENTORY_SUMMARY_SETTING,
    MANAGER_DASHBOARD_JOURNAL_SUMMARY_SETTING,
    MANAGER_DASHBOARD_MISMATCHING_ORDERS_SETTING,
    MANAGER_DASHBOARD_PROFIT_SUMMARY_SETTING,
    MANAGER_DASHBOARD_PURCHASE_SUMMARY_SETTING,
    MANAGER_DASHBOARD_SALES_SUMMARY_SETTING,} from '../role/index';

@Injectable()
export class DashboardService {
    
    constructor(private http: Http,
                private router: Router) {

    }

    getDashboardInventorySummarySetting(): any {

        let roleId = CONSTANT.MENU.MANAGER;
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_DASHBOARD_INVENTORY_SUMMARY_SETTING;
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

    getDashboardInventorySummaryData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_DASHBOARD_INVENTORY_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().dashboard_inventory_summary_data;
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

    getDashboardJournalSummarySetting(): any {
        
        let roleId = CONSTANT.MENU.MANAGER;
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_DASHBOARD_JOURNAL_SUMMARY_SETTING;
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

    getDashboardJournalSummaryData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_DASHBOARD_JOURNAL_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().dashboard_journal_summary_data;
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

    getDashboardMismatchingOrdersSetting(): any {
        
        let roleId = CONSTANT.MENU.MANAGER;

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_DASHBOARD_MISMATCHING_ORDERS_SETTING;
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

    getDashboardMismatchingOrdersData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_DASHBOARD_MISMATCHING_ORDERS_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().dashboard_mismatching_orders_data;
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

    getDashboardProfitSummarySetting(): any {
        
        let roleId = CONSTANT.MENU.MANAGER;

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_DASHBOARD_PROFIT_SUMMARY_SETTING;
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

    getDashboardProfitSummaryData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_DASHBOARD_PROFIT_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().dashboard_profit_summary_data;
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

    getDashboardPurchaseSummarySetting(): any {
        
        let roleId = CONSTANT.MENU.MANAGER;

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_DASHBOARD_PURCHASE_SUMMARY_SETTING;
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

    getDashboardPurchaseSummaryData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_DASHBOARD_PURCHASE_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().dashboard_purchase_summary_data;
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

    getDashboardSalesSummarySetting(): any {
        
        let roleId = CONSTANT.MENU.MANAGER
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_DASHBOARD_SALES_SUMMARY_SETTING;
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

    getDashboardSalesSummaryData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_DASHBOARD_SALES_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().dashboard_sales_summary_data;
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