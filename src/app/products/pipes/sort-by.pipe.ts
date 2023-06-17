import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    
    transform(heroes: Hero[], sortBy: keyof Hero | '' = '', order: 'asc'|'des' = 'asc'): Hero[] {
        switch (sortBy) {
            case 'name':
                return heroes.sort( order == 'asc' ? ((a,b) => (a.name > b.name) ? 1: -1) : ((a,b) => (a.name < b.name) ? 1: -1) )
            case 'canFly':
                return heroes.sort( order == 'asc' ? ((a,b) => (a.canFly > b.canFly) ? 1: -1) : ((a,b) => (a.canFly < b.canFly) ? 1: -1) )
            case 'color':
                return heroes.sort( order == 'asc' ? ((a,b) => (a.color > b.color) ? 1: -1) : ((a,b) => (a.color < b.color) ? 1: -1) )
            default:
                return heroes;
        }
    }
}