import {Component} from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <button (click)="addChild.value = addChild.value + 1">Add</button>
        <app-child #addChild></app-child>
    `
})

export class ParentComponent {
   
}