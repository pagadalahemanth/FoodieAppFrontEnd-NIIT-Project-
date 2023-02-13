import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-restaurant-owner',
  templateUrl: './restaurant-owner.component.html',
  styleUrls: ['./restaurant-owner.component.css']
})
export class RestaurantOwnerComponent implements OnInit {
  details:any;
  constructor(private rs:RegisterService) { }

  ngOnInit(): void {
    this.getRestaurantOwnerDetails();
  }

  getRestaurantOwnerDetails(){
    // console.log(this.rs.restaurantname);
    if(this.rs.restaurantname!=null){
      localStorage.setItem('restaurantName',this.rs.restaurantname)
    }
    
    this.rs.getRestaurantOwnerDetails(localStorage.getItem('restaurantName')).subscribe((x)=>this.details=x);
  }  

  
  deleteItem(restaurantName:any,itemName:any){
    this.rs.deleteItemInRestaurant(restaurantName,itemName).subscribe(()=>alert("deleted item in your restaurant"))
    this.ngOnInit();
  }

 
}
