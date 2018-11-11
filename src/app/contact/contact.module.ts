import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactListComponent,ContactComponent, ContactEditComponent, ContactDetailComponent]
})
export class ContactModule { }
