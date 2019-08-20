import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HeaderComponent } from '@cmp/index';
import { environment } from '@env/environment';
import { AppRoutingModule, AuthModule, FormModule } from '@mod/index';
import { HomeComponent } from '@pag/index';
import { AllEffects, appReducers } from '@str/index';
import { AppComponent } from './app.component';

const {
  firebase: {
    FIREBASE_MAPS_API_KEY,
    FIREBASE_MAPS_AUTH_DOMAIN,
    FIREBASE_MAPS_DATABASE_URL,
    FIREBASE_MAPS_PROJECT_ID,
    FIREBASE_MAPS_STORAGE_BUCKET,
    FIREBASE_MAPS_MESSAGING_ID
  }
} = environment;

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: FIREBASE_MAPS_API_KEY,
      authDomain: FIREBASE_MAPS_AUTH_DOMAIN,
      databaseURL: FIREBASE_MAPS_DATABASE_URL,
      projectId: FIREBASE_MAPS_PROJECT_ID,
      storageBucket: FIREBASE_MAPS_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MAPS_MESSAGING_ID
    }),
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    EffectsModule.forRoot(AllEffects),
    FormModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
