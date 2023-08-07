import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() {}

  public adicionar():number{ //tipando a função que deve retornar sempre um número
    return this.valor += 1;
  }
 
  ngOnInit(): void {}

  ngDoCheck(): void { //verifica se teve alguma alteração
    console.log("Do Check")
  }
  ngAfterContentInit(): void { // Chamado quando é iniciado
    console.log("After Content Init")
  }
  ngAfterContentChecked(): void { // Chamado quando houver alguma alteração
    console.log("After Content Checked")
  }
  ngAfterViewInit(): void { // É chamado quando ele aparece na view/na tela (visualizado)
    console.log("After View Init")
  }
  ngAfterViewChecked(): void { // Chamado quando é iniciado
    console.log("After View Checked")
  }

  public destruirComponente(){
    this.destruir = false;
  }
}

