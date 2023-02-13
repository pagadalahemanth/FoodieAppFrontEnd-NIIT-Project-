import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
cartItems!:any[];
total:number=0;
message:string="Order placed"
action:string="success"
message1:string="item deleted in cart"
message2:string="cart is empty"
// cart.quantity:any
plus(price:any,quantity:any){
  // this.quantity = quantity+1;
  //  this.totalPrices=quantitys*value;
}

minus(price:any,quantity:any)
{
//   if(this.quantitys != 0)
// {
//  this.quantitys = this.quantitys-1;
//  this.totalPrices=this.quantitys*value;
// }
}

  constructor(private rs:RegisterService,private ls:LoginService,private snackbar:MatSnackBar,private router:Router) { }
  display()
  {
   this.rs.getOrderedDetails(this.ls.userEmail).subscribe(x=>this.cartItems=x);
   this.rs.getOrderedDetails(this.ls.userEmail).subscribe((x)=>x.map((y:any)=>this.total=this.total+y.totalPrice));
  }
  delete(deleteItem:any)
  {
    this.rs.deleteById(deleteItem).subscribe(()=>
    this.snackbar.open(this.message1,this.action,{duration:3000})
    );
    this.ngOnInit();
  }


  addToCart(){
    if(this.cartItems.length==0){
      this.snackbar.open(this.message2,this.action)
    }else{
    this.snackbar.open(this.message,this.action,{duration:3000})
    this.rs.deleteCartItems().subscribe(()=>console.log("deleted"))
    this.router.navigateByUrl("/cart");
  }
}

  ngOnInit(): void {
    this.display();
  }

}
