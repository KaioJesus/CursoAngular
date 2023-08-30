import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter();
  // emitindo evento para fora deste componente

  public addItemTaskList: string = "";

  constructor() { }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    // remover os espaços

    if (this.addItemTaskList) {
      // se esse elemente tem valor
      this.emitItemTaskList.emit(this.addItemTaskList);
      // o evento é emitido
      this.addItemTaskList = "";
    }
  };
}
