import { Injectable } from '@angular/core';

@Injectable()
export class Jwt {

    private payload : any;
    private header : any;
    private token : any;
    private secretkey : any;
 
    constructor() {

    }

    GenJwt(header : any, payload : any) : void {
        // encode header to base64
        // encode playload to base64
        // hash header+playload by secretkey
        // join base64_header,base64_playload,hash_value
        // token = base64_header.base64_playload.hash_value
        return;
    }
 
    GetToken() {
        return this.token;
    }
 
    verifyToken(token : any) : boolean {
        // hash header+playload by secretkey
        // compare token with new hash_value
        // if same return true
        // if different return false
        return true;
    }
 
}
