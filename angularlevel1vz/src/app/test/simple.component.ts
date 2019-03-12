import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  template:`
    <h1 class="text-success">{{info}}</h1>
  `
})
export class SimpleComponent {
  info:string = 'I am a Simple Component ';
}
