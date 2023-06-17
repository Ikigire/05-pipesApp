import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
    name: 'colorString'
})

export class ColorStringPipe implements PipeTransform {
    
    transform(color: number): string {
        let colors: string[] = ['red', 'black', 'blue', 'green'];
        return colors[color];
    }
}