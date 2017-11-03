import {OnInit, Input, Output, EventEmitter, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import { ViewCell,Cell,DefaultEditor, Editor} from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgUploaderOptions } from 'ngx-uploader';
import {CONSTANT} from '../../../../../../constant/index';


@Component({
  selector: 'upload-cell',
  template: `<div *ngIf="this.salesId" style="width: 200px;margin-top: 15px;"><ba-file-uploader [fileUploaderOptions]="fileUploaderOptions"></ba-file-uploader></div>`,
})
export class UploadCell extends DefaultEditor implements OnInit, AfterViewInit{
    
  public fileUploaderOptions: NgUploaderOptions; 
  public salesId:any;

  constructor(private modalService: NgbModal) {
    super();
  }

  ngOnInit(){

    let userId = localStorage.getItem(CONSTANT.KEYWORD.USER_ID);
    let companyId = localStorage.getItem(CONSTANT.KEYWORD.COMPANY_ID);
    let jwt = localStorage.getItem(CONSTANT.KEYWORD.JWT);
    let referenceRoleId = localStorage.getItem(CONSTANT.KEYWORD.REFERENCE_ROLE_ID);
    this.salesId = this.cell.getRow().getData().salesId;

    let data = {
            userId: userId,
            companyId: companyId,
            jwt: jwt,
            salesId: this.salesId};

    this.fileUploaderOptions = {
        // url: 'http://website.com/upload'
        url: CONSTANT.URL.UPLOAD_PURCHASE_PHOTOCOPY,
        multipart: true,
        data: data,
    };
  }

  ngAfterViewInit() {
  }
}