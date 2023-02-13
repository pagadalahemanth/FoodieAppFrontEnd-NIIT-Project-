import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-admin-restaurant',
  templateUrl: './admin-restaurant.component.html',
  styleUrls: ['./admin-restaurant.component.css']
})
export class AdminRestaurantComponent implements OnInit {

  resDetails=this.fb.group({
    restaurantName:['',Validators.required],
    password:['',Validators.required],
    location:['',Validators.required]
  })

  message:string="Registered restaurant successful"
  action:string="success"
  message1:string="Invalid or already present"
  action1:string="ok"
  constructor(private fb:FormBuilder,private router:Router,private rs:RegisterService,private snackbar:MatSnackBar) { }

  get restaurantName()
  {
    return this.resDetails.get('restaurantName');
  }
  get password()
  {
    return this.resDetails.get('password');
  }
  get location()
  {
    return this.resDetails.get('location');
  }

  addResData(){
    this.rs.addRestaurant(this.resDetails.value).subscribe(()=>
    this.snackbar.open(this.message,this.action),
    (error:Error)=>  
    this.snackbar.open(this.message1,this.action1));
  
    console.log(this.resDetails.value)
    this.router.navigateByUrl("owner")

  }

  ngOnInit(): void {
  }

}
