import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './register';

@Component({
  selector: 'usr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errrorMsgList: any;
  submitted = false;

  constructor(public router: Router) { }
  public register = new Register();
  ngOnInit() {
    console.log(this.register)
  }

  signUp() {
    let registerObj = this.register;
    this.errrorMsgList = [];
    let ma = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?/;
    registerObj.userName === '' ? this.errrorMsgList.push('Please Enter Your User Name.') : [];
    registerObj.eMail === '' ? this.errrorMsgList.push('Please Enter Your MAIL ID.') : [];
    registerObj.zipCode === undefined ? this.errrorMsgList.push('Please Enter Your zip code.') : [];

    /*
if(registerObj.userName === ""){
  this.errrorMsgList.push('enter');
  
}
*/
    if (this.errrorMsgList.length === 0) {
      if(!(registerObj.eMail.match(ma))){
        this.errrorMsgList.push('kkkk')
        return false;
      }
      if (registerObj.country !== "-1") {
        this.router.navigateByUrl('/user');
      }else{this.errrorMsgList.push('Select yor country')}
    }

  }

}
