import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb:FormBuilder,private rs:RegisterService,private ls:LoginService,private router:Router,private snackbar:MatSnackBar) { }
  ngOnInit(): void {
  }
  
  message:string="LoggedIn Successfully"
  action:string="success"

  message1:string="Invalid email or password"
  action1:string="ok"

  image:any;
  logindetails=this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]]});

    get email()
    {
      return this.logindetails.get('email');
    }
    get password()
    {
      return this.logindetails.get('password');
    }
    helper = new JwtHelperService();
    addLogData(){
      this.rs.addLogin(this.logindetails.value).subscribe((data)=>
      {
        console.log(data);
        console.log(data.token);
        console.log(data.message);
        console.log(data.usertype);
        console.log(data.email);
        this.image=data.image;
        console.log(this.image);
        this.ls.logInImage=this.image;
        console.log(this.ls.logInImage);
        this.ls.userEmail=data.email;
        console.log(this.ls.userEmail);

        localStorage.setItem('jwt', data.token)
          // console.log(this.helper.decodeToken(localStorage.getItem('jwt')));
          
        const decodedToken =this.helper.decodeToken(data.token)
      
        // localStorage.setItem('userEmail', decodedToken.userEmail)
        // console.log(decodedToken.userEmail);
        // localStorage.setItem('usertype', decodedToken.usertype)
        // console.log(decodedToken.usertype);
        // localStorage.setItem("jwt",this.responseData.token);
        // localStorage.setItem("role",this.responseData.role);
        if(data.usertype=="admin")
        {
           this.ls.adminLogIn();
           this.snackbar.open(this.message,this.action,{duration:5000});
           this.router.navigateByUrl("");
        }
        else{
          this.ls.userLogIn();
          this.snackbar.open(this.message,this.action,{duration:5000});
          this.router.navigateByUrl("");
        }
      },(error:Error)=>
      this.snackbar.open(this.message1,this.action1)
      )
    }
}
