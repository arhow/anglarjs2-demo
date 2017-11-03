import {OnInit, Input, Output, EventEmitter, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ViewCell,Cell,DefaultEditor, Editor} from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import * as moment from 'moment';

@Component({
  selector: 'calendar-cell',
  template: `<div style="width:200px;"><ng2-datepicker (ngModelChange)="ngModelChanged($event)" [options]="options" [(ngModel)]="date"></ng2-datepicker></div>`,
  styleUrls: [('./calendarcell.scss')],
})
export class CalendarCell extends DefaultEditor implements OnInit, AfterViewInit{
    
  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    super();
    this.options = new DatePickerOptions();
  }

  ngOnInit(){
    let dateModel: DateModel = new DateModel();
    dateModel.momentObj = moment(this.cell.getValue(), 'YYYY-MM-DD');
    dateModel.formatted = dateModel.momentObj.format('YYYY-MM-DD');
    this.date = dateModel;
  }

  ngAfterViewInit() {

  }

  ngModelChanged(event){
    this.cell.newValue = event.formatted;
  }
}