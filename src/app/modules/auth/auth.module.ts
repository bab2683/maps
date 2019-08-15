import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormModule } from '@mod/form';

import { DashboardComponent, LoggedInComponent, LoginComponent } from './components';

@NgModule({
  declarations: [LoginComponent, LoggedInComponent, DashboardComponent],
  exports: [DashboardComponent, LoginComponent, LoggedInComponent],
  imports: [AngularFireAuthModule, CommonModule, FormModule]
})
export class AuthModule {}
