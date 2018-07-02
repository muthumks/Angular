import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'usr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errrorMsgList: any;
  constructor(public router: Router) { }
  public login = new Login();
  ngOnInit() {
    console.log(this.login)
  }

  signIn() {
    let loginObj = this.login;
    this.errrorMsgList = [];
    loginObj.userName === '' ? this.errrorMsgList.push('Please Enter the User Name') : '';
    loginObj.password === '' ? this.errrorMsgList.push('Please Enter the Password') : '';

    if (this.errrorMsgList.length === 0) {
      if (loginObj.userName === 'Muthu' && loginObj.password === 'Subha2403') {
        this.router.navigateByUrl('/user');
      } else {
        this.errrorMsgList.push('invalid user name or password...!')
      }

    }
  }
}
