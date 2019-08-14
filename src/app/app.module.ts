import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [AngularFireModule.initializeApp(environment.firebase), AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
