import { Component } from '@angular/core'

@Component({
    selector: 'hocsinh',
    template: '<h1>Hello {{ name }}</h1>'
})

export class HocsinhComponent {
    name:string = "Nguyen van a";
}