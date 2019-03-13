import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 public flag= false;
 public msg: String= '';
 public successMsg: String= '';
 public  appTitle: String = 'Welcome to angular2.0 world with angular services.' ;
 public heros: string[] = ['ram'];

constructor(private _service: LoginService) {
  console.log('LoginService instantiated ===>');
}

 public getMessage() {
   console.log('service-app:: LoginService.getMessage()===>');
   this.msg = this._service.getMessage();
}

public alertMe(val): boolean {
  alert(val);
  this.flag = true;
  console.log('service-app:: alertMe(-) invoked');
  return this.flag;
  }

  public ngOnInit() {
    console.log('service-app:: call back invoked');
    // this.msg = this._service.getMessage();
    console.log('service-app : LoginService.getMessage()===>');
  }
}
