import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import { Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_JOURNAL_SUMMARY_SETTING,
    ACCOUNTANT_JOURNAL_SUMMARY_SETTING,
    MANAGER_JOURNAL_DETAIL_SETTING,
    ACCOUNTANT_JOURNAL_DETAIL_SETTING } from '../role/index';

@Injectable()
export class JournalService {
    
    constructor(private http: Http,
                private router: Router) {

    }

    getJournalSummarySetting(): any {

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);
        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_JOURNAL_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_JOURNAL_SUMMARY_SETTING;
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

    getJournalSummaryData(from:any, to:any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                from: from,
                to: to,
            }
        });

        return this.http.get(CONSTANT.URL.GET_JOURNAL_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().journal_summary_data;
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

    getJournalDetailSetting(): any {
        
        let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_JOURNAL_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_JOURNAL_DETAIL_SETTING;
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

    getJournalDetailData(bankId:any, from:any, to:any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                bankId: bankId,
                from: from,
                to: to,
            }
        });

        return this.http.get(CONSTANT.URL.GET_JOURNAL_DETAIL_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().journal_detail_data;
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
    newJournalData(bankId: any, record: any): Observable<any> {
        
        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
                bankId: bankId,
            }
        });

        return this.http.get(CONSTANT.URL.NEW_JOURNAL, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return true;
                }
                else if (response.status == CODE.HTTPSTATUS.NO_CONTENT){
                    // if failed 
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

    updateJournalData(record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
            }
        });

        return this.http.get(CONSTANT.URL.UPDATE_JOURNAL, options).map(
            (response: Response) => {

                // log in succeed
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

    deleteJournalData(record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
            }
        });

        return this.http.get(CONSTANT.URL.DELETE_JOURNAL, options).map(
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