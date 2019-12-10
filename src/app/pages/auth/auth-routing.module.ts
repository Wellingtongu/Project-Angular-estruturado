import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';


// const routes: Routes = [
//   {path: '', component: LoginComponent},
//   {path: 'password', component: PasswordComponent}
// ];


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
