import { Component, DoCheck } from '@angular/core';

// interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public setEmitTaskList(event: string) {
    return this.taskList.push({ task: event, checked: false });
  }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public deletarItem(e: number){
    this.taskList.splice(e, 1);
  }

  public deletarTodosItens(){
    const confirm = window.confirm("Deseja realmente apagar tudo?")
    this.taskList = [];
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort( (first, last) => 
    Number(first.checked) //convertendo o first.checked para um numero e o sorte deixa ele como 0 ou 1, se 0 falso, se 1 verdadeiro
    - 
    Number(last.checked))
    // sort -> ordenar
    // ordenando, quando o item ficar como checked, ele irá para o final da lista
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
