import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'detail/:id/:name/:phone', component: ContactDetailComponent},
  {path: '', component: ContactsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations:[
    ContactsComponent,
    ContactDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
