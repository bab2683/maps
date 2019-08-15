import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormModule } from '@mod/form';

import { LoggedInComponent, LoginComponent } from './components';

@NgModule({
  declarations: [LoginComponent, LoggedInComponent],
  exports: [LoginComponent, LoggedInComponent],
  imports: [AngularFireAuthModule, CommonModule, FormModule]
})
export class AuthModule {}
