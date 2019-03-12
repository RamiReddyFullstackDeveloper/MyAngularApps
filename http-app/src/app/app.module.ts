import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginService } from '../services/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
