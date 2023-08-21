import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = "Kaio";
  public idade: number = 23;
  public multiplicador: number = 2;

  public checkedDisabled: boolean = false;
  public imgSrc: string ="https://www.devmedia.com.br/arquivos/cursos/curso_o_que_e_angular_2312.jpg"
  public imgTitle: string = "Curso angular - property binding"
  public descricaoIMG: string = "Imagem o que é angular"

  public position: {x: number, y:number} = {x: 0, y: 0}

  constructor(){}
  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent){ //parâmetro tipado
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
