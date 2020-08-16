import {Component} from '@angular/core';

@Component({
    selector:'baihat',
    template: `
    <h3 [style.color]="'green'">Bai hat {{ten}}</h3>
    <h3 [style.color]="mauchu"> Bai hat {{ten}}</h3>
    <div [class.aovang]="macao"> Tinh xot xa thoi</div>
    <div [class.aohong]="macao"> Tinh xot xa thoi</div>
    <img (click)="clickHinh($event)" src="{{hinh}}" [attr.logo]="mauchu" />
    `,
    styles: [
        `
        .aovang{backGround-color: yellow}
        .aohong{backGround-color: pink}

        `
    ]
})

export class BaihatComponent {
    ten:string = 'Tinh thoi xot xa';
    mauchu:string = 'red';
    macao:boolean = true;
    hinh:string = 'https://khoapham.vn/public/images/logo-370.png';

    constructor(){
        this.ten = 'Xa roi mua dong';
    }

    clickHinh(e){
        console.log('Click hinh');
        console.log(e);
    }
}

