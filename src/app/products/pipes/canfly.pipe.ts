import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canfly'
})

export class CanFlyPipe implements PipeTransform {
    transform(canFly: boolean): 'Vuela'|'No vuela' {
        return canFly?
        "Vuela": 
        "No vuela";
    }
}