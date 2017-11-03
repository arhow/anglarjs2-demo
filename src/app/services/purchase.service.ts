import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_VENDOR_SUMMARY_SETTING,
    ACCOUNTANT_VENDOR_SUMMARY_SETTING,
    PURCHASE_MANAGER_VENDOR_SUMMARY_SETTING,
    MANAGER_PURCHASE_DETAIL_SETTING,
    ACCOUNTANT_PURCHASE_DETAIL_SETTING,
    PURCHASE_MANAGER_PURCHASE_DETAIL_SETTING } from '../role/index';

    


@Injectable()
export class PurchaseService {
    
    constructor(private http: Http,
                private router: Router) {

    }


    getVendorSummarySetting(): any {

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_VENDOR_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_VENDOR_SUMMARY_SETTING;
        }
        else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
            return PURCHASE_MANAGER_VENDOR_SUMMARY_SETTING;
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

    getVendorSummaryData(): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                referenceRoleId: referenceRoleId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_VENDOR_SUMMARY_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().purchase_vendor_summary_data;
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

    getPurchaseDetailSetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_PURCHASE_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.ACCOUNTRANT){
            return ACCOUNTANT_PURCHASE_DETAIL_SETTING;
        }
        else if (roleId == CONSTANT.MENU.PURCHASE_MANAGER){
            return PURCHASE_MANAGER_PURCHASE_DETAIL_SETTING;
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

    getPurchaseDetailData(vendorId: string): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);


        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                vendorId: vendorId,
                referenceRoleId: referenceRoleId,
            }
        });

        return this.http.get(CONSTANT.URL.GET_PURCHASE_DETAIL_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().purchase_detail_data;
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

    newPurchaseData(vendorId:any, record: any): Observable<any> {

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
                vendorId: vendorId,
                roleId: roleId,
            }
        });

        return this.http.get(CONSTANT.URL.NEW_PURCHASE, options).map(
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

    updatePurchaseData(vendorId:any, record: any): Observable<any> {

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
                vendorId: vendorId,
                roleId: roleId,
            }
        });

        return this.http.get(CONSTANT.URL.UPDATE_PURCHASE, options).map(
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

    deletePurchaseData(vendorId:any, record: any): Observable<any> {

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
                vendorId: vendorId,
                roleId: roleId,
            }
        });

        return this.http.get(CONSTANT.URL.DELETE_PURCHASE, options).map(
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