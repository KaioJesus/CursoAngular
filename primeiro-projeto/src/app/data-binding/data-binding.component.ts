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

  constructor(){}
  ngOnInit(): void {}
}
