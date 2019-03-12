import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';

import {ViewChildrenComponent,AlertComponent} from './viewchildren.component';

import {ContentChildrenComponent ,TabsComponent,TabComponent} 
      from './contentchildren.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent,
                    ChildComponent,
                    ViewChildrenComponent,
                    AlertComponent,

                    ContentChildrenComponent,
                    TabsComponent,
                    TabComponent
                  ],
  exports :[ParentComponent,
                ChildComponent,
                ViewChildrenComponent,
                AlertComponent,

                ContentChildrenComponent,
                TabsComponent,
                TabComponent
                ]
})
export class ViewchildModule { }
