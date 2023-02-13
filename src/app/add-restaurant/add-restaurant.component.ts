import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private fb:FormBuilder,private snackbar:MatSnackBar,private rs:RegisterService,private router:Router) { 
    this.restaurantName?.patchValue(this.rs.restaurantname)
  }
  message:string="Added Items"
  action:string="success"
  message1:string="Items not added"
  action1:string="ok"
  restaurantDetails=this.fb.group({
    restaurantName:['',Validators.required],
    // location:['',Validators.required],
  foodList:this.fb.group({
    itemName:['',Validators.required],
    image:['',Validators.required],
    price:[ ,Validators.required],
    rating:[ ],
    itemType:['',Validators.required],
    quantity:[ ]
    })
  })

  get restaurantName()
  {
    return this.restaurantDetails.get('restaurantName');
  }
  // get location()
  // {
  //   return this.restaurantDetails.get('location');
  // }
  get foodList()
  {
    return this.restaurantDetails.get('foodList') as FormGroup;
  }
  get itemName()
  {
    return this.restaurantDetails.get('itemName');
  }
  get image()
  {
    return this.restaurantDetails.get('image');
  }
  get price()
  {
    return this.restaurantDetails.get('price');
  }
  get rating()
  {
    return this.restaurantDetails.get('rating');
  }
  get itemType()
  {
    return this.restaurantDetails.get('itemType');
  }
  get quantity()
  {
    return this.restaurantDetails.get('quantity');
  }

  addRestaurantData(){
    this.rs.addItems(this.foodList.value,this.restaurantName?.value).subscribe(()=>
    this.snackbar.open(this.message,this.action,{duration:3000}),
    (error:Error)=>
    this.snackbar.open(this.message1,this.action));
    this.router.navigateByUrl("restaurantOwner");
  }

  ngOnInit(): void {
  }
}
