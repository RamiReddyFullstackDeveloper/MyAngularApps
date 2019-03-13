import { Injectable, OnInit } from '@angular/core';
import { HttpModule , Http, Response} from '@angular/http';

@Injectable()
export class LoginService {
private http: Http = null;


  constructor() {
    console.log('service-app :: LoginService constructor=====>');
    this.http = null;
  }

  public getMessage(): String {
    return 'Welcome to angular2.0 services.';
  }

}
