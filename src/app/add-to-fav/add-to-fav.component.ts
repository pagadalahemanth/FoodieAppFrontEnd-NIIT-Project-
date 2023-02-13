import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-to-fav',
  templateUrl: './add-to-fav.component.html',
  styleUrls: ['./add-to-fav.component.css']
})
export class AddToFavComponent implements OnInit {
  message:string="Removed from favorites"
  action:string="success"
favorites!:any;
  constructor(private rs:RegisterService,private snackbar:MatSnackBar,private router:Router,private ls:LoginService) { }

  display(){
    this.rs.getFav(this.ls.userEmail).subscribe((data)=>this.favorites=data);
  }
  deleteFav(itemName:any){
    this.rs.deleteFav(itemName).subscribe(()=>
    this.snackbar.open(this.message,this.action,{duration:3000})
    );
    // this.router.navigateByUrl("fav");
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.display();
  }

}
