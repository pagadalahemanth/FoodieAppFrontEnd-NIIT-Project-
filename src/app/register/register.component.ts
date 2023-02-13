import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdetails=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    name:['',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    password:['',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]{8,20}')]],
    cpassword:[''],
    image:['',[Validators.required]],
    usertype:['']
  },{validators:this.confirmPassword});

  confirmPassword(fc:AbstractControl):ValidationErrors|null
  {
    let pass = fc.get('password')?.value
    let cpass = fc.get('cpassword')?.value
    if(pass!=cpass)
    {
      return {mustmatch:false}
    }
    return null;
  }

  message:string="Registered Successfully"

  message1:string="Email already exists"
  action:string="OK"

  constructor(private fb:FormBuilder,private rs:RegisterService,private router:Router,private snackbar:MatSnackBar) { }

  get name()
  {
    return this.userdetails.get('name');
  }
  get email()
  {
    return this.userdetails.get('email');
  }
  get password()
  {
    return this.userdetails.get('password');
  }
  get cpassword()
  {
    return this.userdetails.get('cpassword');
  }
  get image(){
    return this.userdetails.get('image');
  }
  get usertype()
  {
    return this.userdetails.get('usertype')
  }

  addData(){
    this.rs.addRegister(this.userdetails.value).subscribe(()=>{
      this.snackbar.open(this.message,this.action)
    },
    (error:Error)=>{
      this.snackbar.open(this.message1,this.action)
    })
    this.router.navigateByUrl("login")
  }

  ngOnInit(): void {
  }

}
