import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContactModule } from './contact/contact.module'
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent,pathMatch:'full' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  // {path:'contact',component:ContactComponent},
  //  {path:'contact',loadChildren:'./contact/contact.module#ContactModule',component:ContactComponent},
  //{path:'contact',loadChildren:()=>ContactModule},
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
