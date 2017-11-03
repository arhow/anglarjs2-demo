import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService, AlertService, JournalService } from '../../../../services/index';
import { LocalDataSource } from 'ng2-smart-table';
import { BaMenuService} from '../../../../theme';
import { CODE} from '../../../../code/index';
import { CONSTANT} from '../../../../constant/index';


@Component({
  selector: 'journalsummary',
  styleUrls: ['./journalsummary.scss'],
  templateUrl: './journalsummary.html'
})
export class JournalSummary {

    public title: string;
    public settings;
    public source: LocalDataSource = new LocalDataSource();
    public from;
    public to;

    constructor(private journalService : JournalService,
        private authenticationService: AuthenticationService,
        private menuService: BaMenuService, 
        private router: Router,
        private alertService: AlertService) {

        // get menu
        this.menuService.updateMenuByRoutes(this.authenticationService.getMenu());
        
        // get inventory setting
        this.settings = this.journalService.getJournalSummarySetting();

        // set title
        this.title = CONSTANT.TITLE.JOURNAL_SUMMARY_TABLE_TITLE;

        // get inventory data
        this.getTodayJournalSummary();

    }

    getTodayJournalSummary(){
        let today = new Date().toLocaleDateString().replace(/[/]/g,"-") + "T00:00:00.000Z";
        this.getJournalSummaryData(today, null);
    }

    getAllJournalSummary(){
        this.getJournalSummaryData(null, null);
    }

    getJournalSummaryData(from:any, to:any): void {
        // this.from = from;
        // this.to = to;
        // this.journalService.getJournalSummaryData(from,to).subscribe(
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

    onUserRowSelect(event): void {
        this.router.navigate(['/pages/journal/journaldetail'],{queryParams:{bankId:event.data.bankId,bankName:event.data.bankName,from:this.from,to:this.to}});
    }

}


