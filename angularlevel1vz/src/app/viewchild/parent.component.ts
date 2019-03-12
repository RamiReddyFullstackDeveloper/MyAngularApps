/*

The scheme of interactions discussed above is based on the 
Mediator Design Pattern. 

ParentComponent is acting as a central authority 
which is responsible for communication between childcomponents.

*/

import {Component, ViewChild} from '@angular/core';

import {ChildComponent} from './child.component';

@Component({
    selector: 'app-viewchild',
    template: `
    <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">
            Show/Hide Child Component Text</button>

        <div class="container" style="background-color:yellow">    
            <child-component></child-component>
        </div>
    </div>
    `
})

export class ParentComponent {
    @ViewChild(ChildComponent) private cc:ChildComponent;

    showHideText() {
        this.cc.toggleVisibility('Parent Component');
    }
}


