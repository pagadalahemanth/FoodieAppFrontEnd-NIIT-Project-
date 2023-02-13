import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public ls:LoginService,private rs:RegisterService,private router:Router) { }
  @Input()
  restaurantDetails!:any[];
 
  deleteRes(restaurantName:any){
    this.rs.deleteRestaurant(restaurantName).subscribe(()=>alert("restaurant deleted"));
  }
  checkout(a:string,b:string){
    this.router.navigateByUrl("/checkout/"+a+"/"+b)
  }
  ngOnInit(): void {
    // console.log(this.restaurantDetails);
  }

}
