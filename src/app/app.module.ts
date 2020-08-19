import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router'

const routesConfig: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'detail', component: ContactDetailComponent},
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HocsinhComponent } from './components/hocsinh/hocsinh.component';
import { BaihatComponent } from './components/baihat/baihat.component';
import { Baitapbuoi3Component } from './components/baitapbuoi3/baitapbuoi3.component';
import { BookComponent } from './book/book.component';
import { InputComponent } from './input/input.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { CardComponent } from './card/card.component';
import { PipeComponent } from './pipe/pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip/ip.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HocsinhComponent,
    BaihatComponent,
    Baitapbuoi3Component,
    BookComponent,
    InputComponent,
    DictionaryComponent,
    PersonComponent,
    PersonListComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    PipeComponent,
    RoundPipe,
    IpComponent,
    FormComponent,
    ReactiveFormComponent,
    ContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
