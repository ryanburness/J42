import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AppRoutingModule } from "app/app-routing/app-routing.module";
import { PlaysComponent } from './plays/plays/plays.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlaysComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
