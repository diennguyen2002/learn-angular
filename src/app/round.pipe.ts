import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'roundNum'
})

export class RoundPipe implements PipeTransform{
    transform(value: number, isUp: boolean, addTo: number): number {
        return isUp ? Math.ceil(value + addTo) : Math.floor(value + addTo);
    }
}

