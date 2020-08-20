import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { ContactsComponent } from './contacts.component';

const routersConfig: Routes = [
    {path: 'contacts', component: ContactsComponent},
    {path: '', component: ContactsComponent}
];

@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        RouterModule.forChild(routersConfig)
    ]
})

export class ContactsModule {}
