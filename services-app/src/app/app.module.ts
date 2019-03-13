import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginService } from '../services/login.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
