import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { AlertComponent } from '../_alert/alert.component';



@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    AlertComponent
  ]
})
export class PasswordModule { }
