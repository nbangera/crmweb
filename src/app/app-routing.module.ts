import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import {ContactModule} from './contact/contact.module'
const routes: Routes = [
  {path:'contact',loadChildren:'./contact/contact.module#ContactModule'},
  //{path:'contact',loadChildren:()=>ContactModule},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
