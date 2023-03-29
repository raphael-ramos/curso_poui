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
    this.tarefas = this.listarTodos()
  }

  listarTodos(): Tarefa[]{
    return this.tarefasService.listarTodos()
  }

}
