import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  styles: [`
    h3 {
        text-decoration:underline;
    }
`]

})
export class StartComponent implements OnInit {
   time:any;
   name:string="Murthy";
   buttonStatus1:boolean = false;
   buttonStatus2:string = 'enabled';
   titleStyle = 'red';
   
  constructor() {
     window.setInterval(() => {
                this.time=new Date().toString()
        }, 1000)
   }
  ngOnInit() {
    console.log("start component is initialized")
  }

//https://developer.mozilla.org/en-US/docs/Web/Events
  Save(event:any){
    console.log("saved the details")
  }
}
