import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { FormBuilder, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  

  itemInfo:any;
   quantitys = 0;
   totalPrices:any=0;
   

  constructor(private ar:ActivatedRoute,private snackbar:MatSnackBar,private ls:LoginService, private rs:RegisterService,private fb:FormBuilder,private router:Router) { }
  message:string="Added to cart"
  action:string="success"
  message1:string="Added to Favorites"
  message3:string="Add Quantity"
  message2:string = "Item is already present in favorites"
  action1:string="OK"
  favo:boolean=false;
  favicon:boolean = false;
  
  plus(value:any){
    this.quantitys = this.quantitys+1;
    this.totalPrices=this.quantitys*value;
  }

  minus(value:any)
  {
    if(this.quantitys != 0)
  {
   this.quantitys = this.quantitys-1;
   this.totalPrices=this.quantitys*value;
  }
  }
  cart(item:any){
    // if(this.ls.isLoggedIn()){
      if(this.quantitys==0){
        this.snackbar.open(this.message3,this.action)
      }else{
      let details={
         foodList:item,
         quantity:this.quantitys,
         totalPrice:this.totalPrices,
         emailId:this.ls.userEmail
      }
      console.log(details);
      this.rs.postOrderDetails(details).subscribe(()=>
      this.snackbar.open(this.message,this.action,{duration:3000}),
      (error:Error)=>{alert("Login to add cart")
      this.router.navigateByUrl("/login")
    }
      );
    }
}
  fav(items:any){
    let favorite={
      itemName:items.itemName,
      image:items.image,
      price:items.price,
      rating:items.rating,
      itemType:items.itemType,
      emailId:this.ls.userEmail
    }
    this.rs.addToFav(favorite).subscribe((x)=>{
      this.favo=x;
      console.log(x)
      if(this.favo==true){
        this.favicon=true;
      this.snackbar.open(this.message1,this.action,{duration:3000})
      }else{
        this.favicon=true;
        this.snackbar.open(this.message2,this.action1)
      }
    },
    (error:Error)=>{alert("Login to add favorites")
    this.router.navigateByUrl("/login");
  }
    )
  }
  ngOnInit(): void {

    this.ar.paramMap.subscribe((data)=>{
      let id = data.get('restaurantName');
      let id1 = data.get('itemName');
      this.rs.getOneItem(id,id1).subscribe((x)=>this.itemInfo=x);
    })
  }

}
