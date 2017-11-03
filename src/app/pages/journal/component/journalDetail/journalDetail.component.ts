import { Component} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticationService, AlertService, JournalService } from '../../../../services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { BaMenuService} from '../../../../theme';
import { CODE} from '../../../../code/index';
import { CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'journaldetail',
  styleUrls: ['./journaldetail.scss'],
  templateUrl: './journaldetail.html'
})
export class JournalDetail {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public bankId;
    public bankName;
    public from;
    public to;
    public hint;

    constructor(private journalService : JournalService,
        private authenticationService: AuthenticationService,
        private menuService: BaMenuService, 
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService) {

        // set hint
        this.hint = CONSTANT.HINT.DATE_FORMAT;

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());
        
        // get journal setting
        this.settings = this.journalService.getJournalDetailSetting();
        
        this.bankId = this.route.snapshot.queryParams['bankId'];
        this.bankName = this.route.snapshot.queryParams['bankName'];
        this.from = this.route.snapshot.queryParams['from'] == undefined ? null : this.route.snapshot.queryParams['from'];
        this.to = this.route.snapshot.queryParams['to'] == undefined ? null : this.route.snapshot.queryParams['to'];

        // set title
        this.title = this.bankName + CONSTANT.TITLE.JOURNAL_DETAIL_TABLE_TITLE;

        // get inventory data
        this.getJournalDetailData(this.from, this.to);

    }

    getJournalDetailData(from:any, to:any): void {

        // this.journalService.getJournalDetailData(this.bankId, from, to).subscribe(
        //     result => {
        //         if (result != null) {
        //             this.source.load(result);
        //         } else {
        //         }
        //     },
        //     error => {
        //         this.alertService.error(CODE.ERROR.BACKEND_ERROR, true);
        //         this.router.navigate(['/error'], {queryParams:{error: error}});
        //     }
        // );
    }

    onDeleteConfirm(event): void {

        event.confirm.resolve();
        // if (window.confirm(CONSTANT.MESSAGE.DELETE_CONFIRM)) {
        //     this.journalService.deleteJournalData(event.data).subscribe(
        //         result => {
        //             if (result == true) {
        //                 // delete succeeded
        //                 event.confirm.resolve();
        //                 this.alertService.info(CODE.INFO.DELETE_SUCCEEDED, true);
        //             } 
        //             else {
        //                 // delete failed
        //                 event.confirm.reject();
        //                 this.alertService.warning(CODE.WARNING.DELETE_FAILED, true);
        //             }
        //         },
        //         error => {
        //             event.confirm.reject();
        //             this.alertService.error(CODE.ERROR.BACKEND_ERROR, true);
        //             this.router.navigate(['/error'], {queryParams:{error: error}});
        //         }
        //     );
        // }
    }

    onSaveConfirm(event): void {

        event.confirm.resolve();
        // if (window.confirm(CONSTANT.MESSAGE.UPDATE_CONFIRM)) {
        //     this.journalService.updateJournalData(event.newData).subscribe(
        //         result => {
        //             if (result == true) {
        //                 // delete succeeded
        //                 event.confirm.resolve();
        //                 this.alertService.info(CODE.INFO.SAVE_SUCCEEDED, true);
        //             } 
        //             else {
        //                 // delete failed
        //                 event.confirm.reject();
        //                 this.alertService.warning(CODE.WARNING.SAVE_FAILED, true);
        //             }
        //         },
        //         error => {
        //             event.confirm.reject();
        //             this.alertService.error(CODE.ERROR.BACKEND_ERROR,true);
        //             this.router.navigate(['/error'], {queryParams:{error: error}});
        //         }
        //     );
        // }
    }

    onCreateConfirm(event): void {

        event.confirm.resolve();

        // if (window.confirm(CONSTANT.MESSAGE.NEW_CONFIRM)) {
        //     this.journalService.newJournalData(this.bankId, event.newData).subscribe(
        //         result => {
        //             if (result == true) {
        //                 // delete succeeded
        //                 event.confirm.resolve();
        //                 this.alertService.info(CODE.INFO.CREATE_SUCCEEDED, true);
        //             } 
        //             else {
        //                 // delete failed
        //                 event.confirm.reject();
        //                 this.alertService.warning(CODE.WARNING.CREATE_FAILED, true);
        //             }
        //         },
        //         error => {
        //             event.confirm.reject();
        //             this.alertService.error(CODE.ERROR.BACKEND_ERROR,true);
        //             this.router.navigate(['/error'], {queryParams:{error: error}});
        //         }
        //     );
        // }
    }

}


