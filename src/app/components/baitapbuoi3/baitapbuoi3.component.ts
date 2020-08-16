import {Component} from '@angular/core';

@Component({
    selector:'baitapbuoi3',
    template: `
        <h3>{{so}}</h3>
        <input (click)="cong()" type='button' value='CONG' />
        <input (click)="tru()" type='button' value='TRU' />
        <img src={{hinh}} (mouseover)="doihinh($event,1)" (mouseout)="doihinh($event,2)" />
    `
})

export class Baitapbuoi3Component {
    so:number = 0;
    hinh:string = 'https://cdn.tgdd.vn/Files/2016/06/27/847848/nhung-duoi-file-hinh-anh-pho-bien-dan-may-doc-duoc-1.jpg';

    doihinh(e, flag=1){
        if(flag == 1){
            e.srcElement.src = 'https://cdn.tgdd.vn/Files/2016/06/27/847848/nhung-duoi-file-hinh-anh-pho-bien-dan-may-doc-duoc-2.jpg';
        } else {
            e.srcElement.src = this.hinh;
        }
    }
    
    cong(){
        this.so = this.so + 1;
    }

    tru(){
        this.so = this.so - 1;
    }

}