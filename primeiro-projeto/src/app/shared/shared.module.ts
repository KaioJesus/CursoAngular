import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //ng class -> diretivas
import { NewComponentComponent} from './new-component/new-component.component'


// ng g m shared -> criando o module
@NgModule({
  declarations: [NewComponentComponent],
  exports: [NewComponentComponent],
  // exportando o modulo para o modulo principal
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
