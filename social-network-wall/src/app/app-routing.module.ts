import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
  path:"",
  redirectTo:'login' , pathMatch:'full' 
  },
  {
    path:'login',
    component:LoginComponent,    
  },
  {
    path:'create-account',
    component:CreateAccountComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
