import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

import { AppRoutingModule } from './app-routing.model';

import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FornecedorFormComponent,
    FornecedorListComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    //ProtheusLibCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
