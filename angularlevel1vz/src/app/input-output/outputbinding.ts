
import {  Component,EventEmitter,Output} from '@angular/core';

//ODM 
export interface IPriceQuote {
    stockSymbol: string;
    lastPrice: number;
}

// child component
@Component({
    selector: 'price-quoter',
    template: `<h1 class="well text-danger">
                Child PriceQuoterComponent:
               {{stockSymbol}} 
                      {{price | currency:'USD':'1.2'}}
               </h1>
               `
})
export class PriceQuoterComponent {
    @Output() 
    lastPriceEvent:EventEmitter <IPriceQuote> =new EventEmitter();

    stockSymbol: string = "Verizon";
    price:number;

    constructor() {
        window.setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                lastPrice: 100*Math.random()
            };
            this.price = priceQuote.lastPrice;
            this.lastPriceEvent.emit(priceQuote);//Raise Event
        }, 1000);
    }
}

// parent component
@Component({
    selector: 'app-event',
    template: `
    <div class='container'>
        <h1 class='text-success'>
        Parent Component received: 
        {{stockSymbol}} {{price | currency:'USD':true:'1.2'}}
        </h1>

       <price-quoter (lastPriceEvent)="priceQuoteHandler($event)">
       </price-quoter>    
    </div>
    `
   })
export class OutputComponent {
    stockSymbol: string;
    price:number;

    priceQuoteHandler(event:IPriceQuote) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    }
}
// Do it: Add MessengerComponent as child to root component
// and input data to display message information
