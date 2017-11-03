import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import {Router, Routes} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CONSTANT } from '../constant/index';
import { CODE } from '../code/index';
import { MANAGER_USER_MANAGEMENT_SETTING, 
        MANAGER_SALER_CUSTOMER_RLS_MANAGEMENT_SETTING,
        MANAGER_CUSTOMER_MANAGEMENT_SETTING,
        MANAGER_VENDOR_MANAGEMENT_SETTING} from '../role/index';

    


@Injectable()
export class ManagementService {
    
    constructor(private http: Http,
                private router: Router) {

    }

    getUserManagementSetting(): any{
        
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_USER_MANAGEMENT_SETTING;
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

    getSalerCustomerRlsManagementSetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_SALER_CUSTOMER_RLS_MANAGEMENT_SETTING;
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

    getCustomerManagementSetting(): any{
        
        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;

        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_CUSTOMER_MANAGEMENT_SETTING;
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
        else {
            return null;
        }
    }

    getVendorManagementSetting(): any{

        // let roleId = localStorage.getItem(CONSTANT.KEYWORD.ROLE_ID);

        let roleId = CONSTANT.MENU.MANAGER;
        
        if (roleId == CONSTANT.MENU.MANAGER){
            return MANAGER_VENDOR_MANAGEMENT_SETTING;
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
        else {
            return null;
        }
    }

    getUserData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_USER_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().management_user_data;
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

    deleteUserData(record: any): Observable<any> {

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

        return this.http.get(CONSTANT.URL.DELETE_USER, options).map(
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

    updateUserData(record: any): Observable<any> {

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

        return this.http.get(CONSTANT.URL.UPDATE_USER, options).map(
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

    newUserData(record: any): Observable<any> {

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

        return this.http.get(CONSTANT.URL.NEW_USER, options).map(
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

    getSalerCustomerRlsData(): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_SALER_CUSTOMER_RLS_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().management_saler_customer_rls_data;
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

    getCustomerData(salerId:any): Observable<any> {

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

        return this.http.get(CONSTANT.URL.GET_CUSTOMER_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().management_customer_data;
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

    newCustomerData(salerId: any, record: any): Observable<any> {
        
        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                salerId: salerId,
                record: record,
            }
        });

        return this.http.get(CONSTANT.URL.NEW_CUSTOMER, options).map(
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

    updateCustomerData(salerId: any, record: any): Observable<any> {
        
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
            }
        });

        return this.http.get(CONSTANT.URL.UPDATE_CUSTOMER, options).map(
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

    deleteCustomerData(record: any): Observable<any> {

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

        return this.http.get(CONSTANT.URL.DELETE_CUSTOMER, options).map(
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

    getVendorData(): Observable<any> {
        
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

        return this.http.get(CONSTANT.URL.GET_VENDOR_DATA, options).map(
            (response: Response) => {

                // log in succeed
                if (response.status == CODE.HTTPSTATUS.OK){
                    return response.json().management_vendor_data;
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

    deleteVendorData(record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
        let vendorId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
            },
        });

        return this.http.get(CONSTANT.URL.DELETE_VENDOR, options).map(
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

    updateVendorData(record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
            },
        });

        return this.http.get(CONSTANT.URL.UPDATE_VENDOR, options).map(
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

    newVendorData(record: any): Observable<any> {

        let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
        let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
        let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);

        let options = new RequestOptions({
            params: {
                userId: userId,
                companyId: companyId,
                jwt: jwt,
                record: record,
            },
        });

        return this.http.get(CONSTANT.URL.NEW_VENDOR, options).map(
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

}