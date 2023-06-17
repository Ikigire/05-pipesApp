import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, mayuscula: boolean = false): string {
        
        if (mayuscula) {
            return value.toUpperCase();
        } else {
            return value.toLowerCase();
        }
    }
}