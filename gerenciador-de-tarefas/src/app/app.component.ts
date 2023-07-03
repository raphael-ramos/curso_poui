import { Component } from '@angular/core';

import { PoMenuItem} from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private proAppConfigService: ProAppConfigService){
    if(!this.proAppConfigService.insideProtheus()){
      this.proAppConfigService.loadAppConfig();
    }
  }

  readonly menus: Array<PoMenuItem> = [
    {label: 'Home', link: '/',icon:'po-icon-home', shortLabel: 'Home'},
    {label: "Tarefas", link: '/tarefas/listar', icon: 'po-icon-user', shortLabel:'Tarefas'},
    {label: "Sair", action: this.closeApp.bind(this)},
  ];

  private closeApp(){
    if(this.proAppConfigService.insideProtheus()){
      this.proAppConfigService.callAppClose();
    }else{
      alert('O App não está sendo executado dentro do Protheus');
    }
  }
  title = 'gerenciador-de-tarefas';
}
