import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();
  // EventEmitter -> está emitindo algum valor, enviando algum dado para o componente pai
  // Output -> serve para quando estiver no outro componente enviarDado, ele possa ser utilizado
  public list: Array <{nome: string, idade: number}> = [
    {nome: "Kaio Jesus", idade: 23},
    {nome: "Caroline Costa", idade: 22},
    {nome: "Kaua Bento", idade: 14},
  ]

  public pegaDados(e: number){
    this.enviarDados.emit(this.list[e]);
    // emitindo o dado, esse dado é o conteúdo (nó) da lista e para isso é preciso do output para pegar esse dado lá fora, o output sempre acontece quando tiver um evento emitido
    console.log(this.list[e]);
  }

}
