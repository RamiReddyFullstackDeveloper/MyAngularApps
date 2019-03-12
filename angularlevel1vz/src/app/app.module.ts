import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import {SimpleComponent} from './test/simple.component';

//binding
import {DropDownComponent} from './binding/dropdown.component';

import {BindingComponent} from "./binding/binding.component";

import {NestedComponent} from "./binding/nested.component";
import {HighlightComponent } from "./binding/highlightrow.component";

//Working with IOModule
import {IOModule} from './input-output/input-output.module';

//Dependency Injection
import {DIModule} from './di/di.module';
import {ViewchildModule} from './viewchild/viewchild.module';
import {SkillsModule} from './skills/skills.module';
import {LoginModule} from './login/login.module';


import {CompLifeCycleComponent,ChildComponent} from './complifecycle/comlifecycle.component';

import {AnimateComponent} from './animation/animation.component'


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BindingComponent,
    SimpleComponent,
    DropDownComponent,
    
    NestedComponent,
    HighlightComponent ,

    CompLifeCycleComponent,
    ChildComponent,
    AnimateComponent

  ],
  imports: [
    BrowserModule,FormsModule,
    IOModule,
    DIModule,
    ViewchildModule,
    SkillsModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
