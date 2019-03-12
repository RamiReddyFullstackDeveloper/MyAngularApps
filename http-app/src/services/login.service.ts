import {Injectable, OnInit} from '@angular/core';
import {Http, HttpModule, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';


import {Login} from '../models/login';


@Injectable()
export class LoginService implements OnInit {

  private flag = true;

  public constructor(private _http: Http) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*****************************************************************
   * @author RAMI REDDY
   * @since 2017
   ******************************************************************/
  public authenticateUser(userId: string, userName: string): boolean {
    console.log('Enter :: LoginService.authenticateUser(userId = ' + userId + ', userName = ' + userName + ')');

    if (userId === null || userName === null) {
      console.log('Invalid credentials failed, please try again after');
      this.flag = false;
    }

    if ((userId === 'ram') && (userName === '1256')) {
      console.log('You have successfull loged in..');
      this.flag = true;
    }
    return this.flag;
  }

  /************************************************
   * @author RAMI REDDY
   * @since 2017
   ************************************************/
  public authenticateUser1(_login: Login): boolean {
    console.log('Enter :: LoginService.authenticateUser(userId ' + _login.getUserId() + ', userName ' + _login.getUserName());
    if (_login.getUserId() === null || _login.getUserName() === null) {
      console.log('Invalid credentials found, please try again after...');
      this.flag = false;
    }

    else if ((_login.getUserId() === 'ram') && (_login.getUserName() === '1256')) {
      console.log('You have successfull loged in..');
      this.flag = true;
    }
    else {
      console.log('Invalid credentials failed, please try again after..');
      this.flag = true;
    }
    return this.flag;
  }

  /************************************************
   * @author RAMI REDDY
   * @since 2017
   ************************************************/
  public registerUser(login: Login): boolean {

    return this.flag;
  }

  /************************************************
   * @author RAMI REDDY
   * @since 2017
   * @GET
   ************************************************/
  public getCurrentTime() {
    return this._http.get('http://date.jsontest.com').map(res => res.json());
  }

  /************************************************
   * @author RAMI REDDY
   * @since 2017
   * @POST
   ************************************************/
  public postJson() {
    const URL = 'http://validate.jsontest.com';
   // var json = JSON.stringify([]);
   // var json = JSON.stringify([{var1: 'test', var2: 3}]);
    var json = JSON.stringify({var1: 'test', var2: 3});
    const params = 'json=' + json;
    console.log('post json object : ' + params);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(URL, params,
      {
        headers: headers
      }).map(res => res.json());
  }
}

