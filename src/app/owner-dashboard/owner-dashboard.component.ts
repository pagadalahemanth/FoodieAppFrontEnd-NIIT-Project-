import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  details:any;
  ownerDetails=this.fb.group({
    restaurantName:['',Validators.required],
    password:['',Validators.required]
  })

  constructor(private fb:FormBuilder,private rs:RegisterService,private router:Router) { }

  get restaurantName(){
    return this.ownerDetails.get('restaurantName');
  }
  get password(){
    return this.ownerDetails.get('password');
  }
  addData(){
    this.rs.checkRestaurantName(this.restaurantName?.value,this.password?.value).subscribe(()=>{
      this.rs.restaurantname=this.restaurantName?.value;
      
      this.router.navigateByUrl("/restaurantOwner")
    },
    (error:Error)=>{
     this.router.navigateByUrl("/restaurantNotFound");  
  })
    // this.rs.getRestaurantOwnerDetails(this.restaurantName?.value).subscribe((x)=>this.details=x)
    

  }
  ngOnInit(): void {
  }

}
