import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule as BabAuthModule } from '@bab/auth';

import { FormModule } from '@mod/form';

import { DashboardComponent, LoggedInComponent, LoginComponent } from './components';

@NgModule({
  declarations: [LoginComponent, LoggedInComponent, DashboardComponent],
  exports: [DashboardComponent, LoginComponent, LoggedInComponent],
  imports: [BabAuthModule, CommonModule, FormModule]
})
export class AuthModule {}
