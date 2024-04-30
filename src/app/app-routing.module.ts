import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];
console.log('length>>>',routes?.length )

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
