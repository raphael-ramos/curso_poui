import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../Shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent {
  
  tarefas: Tarefa[]

  constructor(private tarefasService: TarefaService){
  }

  ngOnInit(){
    console.log(this.tarefas)
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefasService.listarTodos()
  }

  remover($event: any, tarefa: Tarefa ): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "'+ tarefa.nome + '"?')){
      this.tarefasService.remover(tarefa.id);
      this.tarefas = this.tarefasService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void{
    if(confirm('Deseja alterar o status da tarefa "'+ tarefa.nome +'"?')){
      this.tarefasService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefasService.listarTodos()
    }
  }

}
