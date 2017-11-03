import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// used to create fake backend
import { fakeBackendProvider } from './fakebackend/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// services
import { AuthenticationService, AlertService, SalesService, ManagementService, PurchaseService, 
  ExpensesService, DashboardService, InventoryService, JournalService, ProfitService } from './services/index';
import { AuthGuard } from './guards/index';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

//directives
import { AlertComponent } from './directives/index';



// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    AlertComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
  ],
  providers: [ 
    // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    AlertService,
    AuthGuard,
    AuthenticationService,
    SalesService,
    PurchaseService,
    ManagementService,
    ExpensesService,
    DashboardService,
    InventoryService,
    JournalService,
    ProfitService,
    // providers used to create fake backend
    //fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],

})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
