import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//For Template Driven form
import {FormsModule} from '@angular/forms';

//For Model Driven Form
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import { NewLoginComponent} from './newlogin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, NewLoginComponent],
  exports:[LoginComponent, NewLoginComponent]
})
export class LoginModule { }
