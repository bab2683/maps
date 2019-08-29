import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FormModule } from '@mod/form';

import { DashboardComponent, LoggedInComponent, LoginComponent } from './components';
import { AUTH_STATE, AuthEffects, authReducer } from './store';

@NgModule({
  declarations: [LoginComponent, LoggedInComponent, DashboardComponent],
  exports: [DashboardComponent, LoginComponent, LoggedInComponent],
  imports: [
    AngularFireAuthModule,
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    FormModule,
    StoreModule.forFeature(AUTH_STATE, authReducer)
  ]
})
export class AuthModule {}
