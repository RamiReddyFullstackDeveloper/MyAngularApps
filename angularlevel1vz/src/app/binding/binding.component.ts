
import {Component} from "@angular/core";
import {NestedComponent} from './nested.component'

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'    
})
export class BindingComponent {
    clicked:boolean=false;

     public Items:any = [
                     {name: "Kendo UI"},
                     {name: "Ext JS"},
                     {name: "Angular JS"},
                     {name: "Ember JS"}
                  ];

     public clickedItem:any = {name: ""};//property    
     
     // Event Handler
     onItemClicked(Item:any) {
        this.clickedItem = Item;
        this.clicked=true;
     }
}




