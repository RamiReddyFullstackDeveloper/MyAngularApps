//$ npm install @angular/animations@latest --save
// in app.module add animation module
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// add  BrowserAnimationsModule in imports section of module

import { Component}      from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
    selector: 'app-animate',
    template: `
    <div class="container">
     <div class="row" >
        <div class="columns">
            <button (click)="toggleMove()">Press me</button>
        </div>
        <br/>
        <h2 class="columns">
            <div id="content" [@focusPanel]='state'
             [@movePanel]='state'>Murthy Infotek</div>
        </h2>
      </div>
   </div>
    `,
    styles: [`
        button { font-size:1.8em; }
        #content { padding:40px; background:#eeeeee; }
    `],
    animations: [

        trigger('focusPanel', [
            state('inactive', style({
                transform: 'scale(1)',
                backgroundColor: '#33aacc'
            })),
            state('active', style({
                transform: 'scale(1.2)',
                backgroundColor: '#33ccaa'
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ]),

        trigger('movePanel', [
            
            transition('void => *', [
                animate(1600, keyframes([
                    style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                    style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                ]))
            ])

        ])
    ]
})
export class AnimateComponent {
    state: string = 'inactive';

    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }

}
    
    