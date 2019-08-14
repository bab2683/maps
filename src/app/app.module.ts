import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

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
  declarations: [AppComponent, HomeComponent],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: FIREBASE_MAPS_API_KEY,
      authDomain: FIREBASE_MAPS_AUTH_DOMAIN,
      databaseURL: FIREBASE_MAPS_DATABASE_URL,
      projectId: FIREBASE_MAPS_PROJECT_ID,
      storageBucket: FIREBASE_MAPS_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MAPS_MESSAGING_ID
    }),
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
