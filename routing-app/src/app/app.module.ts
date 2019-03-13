import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent }          from './app.component';
import { AddBookComponent }   from './add-book/add-book.component';
import { ViewDetailComponent }   from './home/view-detail.component';
import {ManageBookComponent} from './manage-book/manage-book.component';
import { UpdateBookComponent } from './manage-book/update-book.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { BookService } from './services/book.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
    
  ],
  declarations: [
    AppComponent,
    AddBookComponent,
    HomeComponent,
    ViewDetailComponent,
    UpdateBookComponent,
    ManageBookComponent
  ],
  providers:[BookService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }