import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  foodieApp:string="http://localhost:9090/api/v1/"
  user:string="http://localhost:9090/api/v2/"
  restaurantname:any;

  constructor(private httpRequest:HttpClient) { }
  addRegister(regData:any):Observable<any>{
     console.log(regData);
     return this.httpRequest.post(this.foodieApp + "registers",regData);
  }

  addLogin(logData:any):Observable<any>{
    return this.httpRequest.post(this.user + "login",logData);
  }
  addRestaurant(restaurantData:any):Observable<any>{
    //console.log(this.foodieApp + "restaurant",restaurantData)
    return this.httpRequest.post(this.foodieApp + "restaurant",restaurantData);
  }
  addItems(itemsData:any,restaurantName:any):Observable<any>{
    console.log(restaurantName)
    return this.httpRequest.post(this.foodieApp + "addItems/" + restaurantName,itemsData);
  }
  getResDetails():Observable<any[]>{
    return this.httpRequest.get<any[]>(this.foodieApp + "restaurant");
  }
  checkRestaurantName(restaurantName:any,password:any):Observable<any>{
    return this.httpRequest.get<any>(this.foodieApp + "check/" + restaurantName + "/" + password);
  }
  getAllItems(id:any){
    return this.httpRequest.get<any>(this.foodieApp + id);
  }
  getOneItem(restName:any,itemName:any){
    
    return this.httpRequest.get<any>(this.foodieApp +"restaurant/" + restName + "/"+ itemName);
  }
  getOrderedDetails(emailId:any)
  {
    return this.httpRequest.get<any>(this.foodieApp + "orders/" + emailId);
  }
  postOrderDetails(details:any):Observable<any>{
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.httpRequest.post(this.foodieApp + "order",details,requestOptions);
  }
  deleteCartItems(){
    return this.httpRequest.delete(this.foodieApp + "delete");
  }
  deleteById(deleteItems:any)
  {
    return this.httpRequest.delete(this.foodieApp +"deleteById/"+deleteItems);
  }
  addToFav(items:any):Observable<any>{
    let httpHeaders=new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwt')
    });
    let requestOptions={headers :httpHeaders}
    return this.httpRequest.post(this.foodieApp + "addToFav",items,requestOptions);
  }
  getFav(emailId:any):Observable<any[]>{
    return this.httpRequest.get<any>(this.foodieApp + "favorites/" + emailId);
  }
  deleteFav(item:any){
    return this.httpRequest.delete(this.foodieApp + "deleteFav/" + item);
  }
  getByFoodName(foodName:any)
  {
    return this.httpRequest.get(this.foodieApp + "restaurant/" + foodName);
  }
  deleteRestaurant(resName:any){
    return this.httpRequest.delete(this.foodieApp + "adminDelRes/" + resName);
  }
  getRestaurantOwnerDetails(restaurantName:any){
    this.restaurantname=restaurantName;
    
    console.log(restaurantName);
    
    return this.httpRequest.get(this.foodieApp + 'restaurantOwner/' +restaurantName);
  }
  deleteItemInRestaurant(restaurantName:any,itemName:any){
    return this.httpRequest.post(this.foodieApp + "deleteItem/" + restaurantName,itemName);
  }
  
}
