import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import {Routes} from '@angular/router';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FAKE_MANAGER_PAGES_MENU, FAKE_PURCHASER_PAGES_MENU, FAKE_ACCOUNTANT_PAGES_MENU, FAKE_SALER_PAGES_MENU } from './fakeMenu';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    
    // fake user
    let users: any[] = [{user: 'manger', password: 'manger'},
    {user: 'saler', password: 'saler'},
    {user: 'purchaser', password: 'purchaser'},
    {user: 'accountant', password: 'accountant'}];

    // fake companyId
    let companyId : any = '1000';

    //fake system name
    let system_name : any = '系统';

    //fake menu
    let manager_pages_menu : any = FAKE_MANAGER_PAGES_MENU;
    let purchase_pages_menu : any = FAKE_PURCHASER_PAGES_MENU;
    let saler_pages_menu : any = FAKE_SALER_PAGES_MENU;
    let accountant_pages_menu : any = FAKE_ACCOUNTANT_PAGES_MENU;
 
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {

        // wrap in timeout to simulate server api call
        setTimeout(() => {
 
            // authenticate
            if (connection.request.url.endsWith('/ironman/authenticate/verifyuser') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());
 
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.user === params.user && user.password === params.password;
                });
 
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    connection.mockRespond(new Response(new ResponseOptions({status: 200, body: {jwt: 'fake-jwt-token'}})));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                }
 
                return;
            }

            // get system name
            if (connection.request.url.match('/ironman/authenticate/getsystemname') && connection.request.method === RequestMethod.Post) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                // respond 200 OK
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: {system_name : system_name, companyId : companyId} }))); 
                return;
            }

            // get system name
            if (connection.request.url.match('/ironman/authenticate/getmenu') && connection.request.method === RequestMethod.Post) {

                //check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.json().jwt === 'fake-jwt-token') { 
                    // respond 200 OK
                    let username = connection.request.json().user;

                    if (username == 'manager')
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 ,body: {jwt: 'fake-jwt-token', menu : manager_pages_menu}})));
                    else if (username == 'purchaser')
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 ,body: {jwt: 'fake-jwt-token', menu : purchase_pages_menu}})));
                    else if (username == 'accountant')
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 ,body: {jwt: 'fake-jwt-token', menu : accountant_pages_menu}})));
                    else 
                        connection.mockRespond(new Response(new ResponseOptions({ status: 200 ,body: {jwt: 'fake-jwt-token', menu : saler_pages_menu}})));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
                return;
            }


            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
 
        }, 500);
 
    });
 
    return new Http(backend, options);
};
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};