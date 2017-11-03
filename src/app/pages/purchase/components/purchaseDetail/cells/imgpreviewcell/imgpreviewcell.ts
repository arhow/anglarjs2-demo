import {OnInit, Input, Output, EventEmitter, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ViewCell,Cell,DefaultEditor, Editor} from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
import { CONSTANT } from '../../../../../../constant/index';

@Component({
  selector: 'img-preview-cell',
  template: `<div style="padding:0.5em"><button type="button" class="btn btn-default  btn-icon" (click)="showModal($event)">显示</button></div>`, 
})

export class ImgPreviewCell extends DefaultEditor {
    
  value : any;
  constructor(private modalService: NgbModal) {
    super();
  }

  showModal(event){
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = CONSTANT.KEYWORD.PHOTOCOPY;
    activeModal.componentInstance.modalContent = CONSTANT.PHOTOCOPY_PATH + this.value;
  }
}