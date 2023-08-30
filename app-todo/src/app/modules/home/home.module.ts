import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
