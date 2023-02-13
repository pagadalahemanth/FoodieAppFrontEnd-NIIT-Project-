import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message:string="LoggedOut"
  action:string="success"

  logout()
  {
    this.ls.logOut();
    // this.router.navigateByUrl("");
    this.snackbar.open(this.message,this.action,{duration:3000})
    this.ls.logInImage="";

  }


  constructor(public ls:LoginService,private snackbar:MatSnackBar,private router:Router) { }


  ngOnInit(): void {
  }

}
