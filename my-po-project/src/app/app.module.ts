import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    ProtheusLibCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
