import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Change language pipe
import localEsCR from '@angular/common/locales/es-CR';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsCR);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    SalesModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
