import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from "./contact-list/contact-list.component"
import { ContactComponent } from './contact.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent, children:
      [{ path: '', component: ContactListComponent },
        { path: 'Edit/:id', component: ContactEditComponent },
        { path: 'Detail/:id', component: ContactDetailComponent }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
