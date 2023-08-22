import { InputComponent } from './input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //ng class -> diretivas
import { NewComponentComponent} from './new-component/new-component.component';
import { OutputComponent } from './output/output.component'


// ng g m shared -> criando o module
@NgModule({
  declarations: [NewComponentComponent, InputComponent, OutputComponent],
  // exportando o modulo para o modulo principal
  exports: [NewComponentComponent, InputComponent, OutputComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
