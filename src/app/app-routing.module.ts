import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsModule } from './contacts/contacts.module';
import { CommonModule } from '@angular/common';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'detail/:id/:name/:phone', component: ContactDetailComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations:[
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    ContactsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
