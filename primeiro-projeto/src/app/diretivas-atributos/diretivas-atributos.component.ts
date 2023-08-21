import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {

  // ng class
  public valor: boolean = false;

  //ng style
  public altura: string = "20px";
  public fonteP: string = "16px";

  // ng mode
  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: 'Kaio'}];

  // pipes

  public date: Date = new Date();
  
  ngOnInit(){
    setInterval(() => {
      if(this.valor){
        this.valor = false;
      } else{
        this.valor = true;
      }
      
      if(this.altura == "20px"){
        this.altura = "50px";
        this.fonteP = "12px";
      } else{
        this.altura = "20px"
        this.fonteP = "16px";
      }
    }, 500);
    // a cada meio segundo troca o valor
  }

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ""; // para excluir o nome do input dps de incluir na lista
  }
}
