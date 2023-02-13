import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  allDetails!:any[];
  details:any;
  constructor(private rs:RegisterService) { }

  displayItems(){
    this.rs.getResDetails().subscribe((data:any[])=>this.allDetails=data);
  }

  filter(event:any){
    if(event == " "){
      this.displayItems();
    }
    else{
      console.log(this.allDetails);
    this.rs.getResDetails().subscribe((data)=>this.allDetails = 
    data.filter(data=>data.restaurantName.toLowerCase().includes(event)))
  }

  }

  // location(event:any){
  //   this.rs.getResDetails().subscribe((data)=>this.allDetails = 
  //   data.filter(data=>data.location.toLowerCase().includes(event)))
  // }

  ngOnInit(): void {

    this.displayItems();

  }

}
