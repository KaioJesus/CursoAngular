import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-diretivas-estruturais',
    templateUrl: './diretivas-estruturais.component.html',
    styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

    // ngIf
    public condition: boolean = true;
    public conditionOnClick: boolean = true;

    // ngFor
    public list: Array<{ nome: string, idade: number }> = [
        { nome: 'Kaio Jesus', idade: 23 },
        { nome: 'Caroline Costa', idade: 22 },
        { nome: 'Kaua Jesus', idade: 14 },
    ]

    // ngSwitch

    public nome: string = 'Kaio';

    ngOnInit(): void {
        setInterval(() => {
            if (this.condition) {
                this.condition = false;
            } else {
                this.condition = true;
            }
        }, 2000)
        // a cada 2 segundos fica alternando entre aparecer e não aparecer 
    }

    public onClick() {
        if (this.conditionOnClick) {
            this.conditionOnClick = false;
        } else {
            this.conditionOnClick = true;
        }

    }

    public onClickAddList() {
        this.list.push({ nome: 'Kevin', idade: 28 })
    }
    public onClickEventList(e: number) {
        this.list.splice(e, 1);
    }
}
