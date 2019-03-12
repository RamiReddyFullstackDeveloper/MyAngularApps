import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Login} from '../models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  appTitle = 'Welcome to angular2.0 http services...';

  private loginService: LoginService = null;
  private flag = true;

  id: string = '1256';
  name: string = 'Rami Reddy';

  getData: string;
  postData: string;

  /************************************************
   * @author : RamiReddy
   * @since : 2017
   ************************************************/
  constructor(private _loginService: LoginService) {
    this.loginService = _loginService;
  }

  /*******************************
   * @author : RamiReddy
   * @since : 2017
   ******************************/
  public authenticate(): boolean {
    const _login = new Login('ram', '1256');
    // this._loginService.authenticateUser('ram1', '1256');
    this._loginService.authenticateUser1(_login);
    return true;
  }

  /*******************************
   * @author : RamiReddy
   * @since : 2017
   * @GET
   ******************************/
  public onTestGet() {
    this._loginService.getCurrentTime()
      .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('onTestGet():Finished')
      );
  }

  /*******************************
   * @author : RamiReddy
   * @since : 2017
   * @POST
   ******************************/
  public onTestPost() {
    this.loginService.postJson()
      .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log('onTestPost(): Finished')
      );
  }

}

