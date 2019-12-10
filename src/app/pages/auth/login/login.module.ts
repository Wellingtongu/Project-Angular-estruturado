import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
// import { AlertComponent } from '../_alert/alert.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    // AlertComponent
  ]
})
export class LoginModule { }
