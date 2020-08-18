import {Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
    selector: 'app-parent',
    template: `
        <button (click)="addChild()">Add</button>
        <app-child></app-child>
    `
})

export class ParentComponent {
  @ViewChild(ChildComponent) 
  myChild: ChildComponent;

  addChild(){
      this.myChild.value = this.myChild.value + 1;
  }


}