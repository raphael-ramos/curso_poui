import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component'; //importar modulo listar
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component'; //importar modulo incluir

const routes: Routes = [
  { path: '', component: FornecedorListComponent }, //lista de fornecedor
  { path: 'fornecedor', component: FornecedorListComponent }, //lista de fornecedor
  { path: 'fornecedorform', component: FornecedorFormComponent }, //form do fornecedor - Incluir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }