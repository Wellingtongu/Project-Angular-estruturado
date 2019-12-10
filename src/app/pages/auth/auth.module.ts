import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
// import alert service and component
// import { AlertComponent } from './_directives/inde';
import { AlertService } from './_alert/index';
import { AlertComponent } from './_alert/alert.component';


@NgModule({
  declarations: [
    LoginComponent,
    PasswordComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    // include alert service in app module providers
    AlertService
],
})
export class AuthModule { }
