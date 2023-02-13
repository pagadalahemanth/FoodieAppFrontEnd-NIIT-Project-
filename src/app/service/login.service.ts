import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 public userEmail:any;
 public userLoggedIn:boolean=false;
 public adminLoggedIn:boolean=false;
 public LoggedIn:boolean=false;
 public logInImage:any;
  constructor() { }
  userLogIn(){
    this.userLoggedIn=true;
    this.LoggedIn=true;
  }
  adminLogIn(){
    this.adminLoggedIn=true;
    this.LoggedIn=true;
  }
  logOut()
  {
    this.LoggedIn=false;
    this.adminLoggedIn=false;
    localStorage.clear();
  }
  // isLoggedIn(){
  //   return !!localStorage.getItem('jwt')
  // }
}
