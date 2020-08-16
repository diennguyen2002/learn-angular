import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HocsinhComponent } from './components/hocsinh/hocsinh.component';
import { BaihatComponent } from './components/baihat/baihat.component';
import { Baitapbuoi3Component } from './components/baitapbuoi3/baitapbuoi3.component';
import { BookComponent } from './book/book.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HocsinhComponent,
    BaihatComponent,
    Baitapbuoi3Component,
    BookComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
