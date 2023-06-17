import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
    selector: 'products-personal-page',
    templateUrl: './personal-page.component.html'
})

export class PersonalComponent implements OnInit {
    mensaje: string = "SaluDOS esTE MESNAJE es PARA SalUDarlos desDE EL PIpe";
    mayusculas: boolean = false;
    heroes: Hero[] = [
        {
            name: 'SuperMan',
            canFly: true,
            color: Color.blue
        },
        {
            name: 'Batman',
            canFly: false,
            color: Color.black
        },
        {
            name: 'DareDevil',
            canFly: false,
            color: Color.red
        },
        {
            name: 'Linterna Verde',
            canFly: true,
            color: Color.green
        },
        {
            name: 'Robin',
            canFly: false,
            color: Color.red
        }
    ];

    orderBy: keyof Hero | '' = '';
    typeOrder: 'asc'|'des' = 'asc';

    items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    constructor() { }
    
    ngOnInit() { }
    
    toggleMayusculas(): void {
        this.mayusculas = !this.mayusculas
    }

    changeOrder(value: keyof Hero) {
        if (this.orderBy === value) {
            this.typeOrder = this.typeOrder == 'asc'? 'des': 'asc';
        } else {
            this.typeOrder = 'asc';
            this.orderBy = value;
        }
    }
}