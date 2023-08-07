import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  public title: string = `Bem-vindo!`
  // Método público
  // TypeScript é tipado, deve ser informado o tipo de todos os métodos e variáveis
  // Interpolation -> Quando utilizamos componentes chamados aqui no html
  constructor(){}

  ngOnInit(): void {}

  ngOnChanges(): void {} // é chamado quando recebe um dado alterado de fora
  ngOnDestroy(): void { // é chamado quando o componente for excluído
    console.log("Componente destruído!")
  } 
}
