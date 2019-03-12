import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StockComponent} from './inputbinding';
import {OrderComponent} from './ordercomponent';
import {SMSComponent} from  './smscomponent';
import {TimerComponent} from './timercomponent';

import {OutputComponent,PriceQuoterComponent} from './outputbinding';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StockComponent,
                      OrderComponent,
                      SMSComponent,
                      TimerComponent,

                      OutputComponent,
                      PriceQuoterComponent
                      ],
  exports:[
                       StockComponent,
                      OrderComponent,
                      SMSComponent,
                      TimerComponent,

                      OutputComponent,
                      PriceQuoterComponent

  ]
                    
})
export class IOModule { }
