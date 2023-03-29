import {NgModule} from "@angular/core" ;
import {Routes, RouterModule} from "@angular/router";

import { TarefaRoutes } from "./tarefas";

export const routes:Routes = [
	{
		path:'',
		redirectTo:'/tarefas/listar',
		pathMatch: 'full'		//para passar a path inteira

	},
	...TarefaRoutes
];

@NgModule({
	imports:[
		RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule
	]
})

export class AppRoutingModule {}