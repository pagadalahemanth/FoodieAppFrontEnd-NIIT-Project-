import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminRestaurantComponent } from './admin-restaurant/admin-restaurant.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddToFavComponent } from './add-to-fav/add-to-fav.component';
import { LoginGuardGuard } from './guard/login-guard.guard';
import { RestaurantOwnerComponent } from './restaurant-owner/restaurant-owner.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RestaurantNotFoundComponent } from './restaurant-not-found/restaurant-not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:"",component:BodyComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"addItems",component:AddRestaurantComponent,canActivate:[LoginGuardGuard]
  },
  {
    path:"addRestaurant",component:AdminRestaurantComponent,canActivate:[LoginGuardGuard]
  },
  {
    path:"checkout/:restaurantName/:itemName",component:CheckoutComponent
  },
  {
    path:"cart",component:AddToCartComponent,canActivate:[LoginGuardGuard]
  },
  {
    path:"fav",component:AddToFavComponent,canActivate:[LoginGuardGuard]
  },
  {
    path:"restaurantOwner",component:RestaurantOwnerComponent
  },
  {
    path:"owner",component:OwnerDashboardComponent
  },
  {
    path:"restaurantNotFound",component:RestaurantNotFoundComponent
  },
  {
    path:"**",component:PageNotFoundComponent
  },
  {
    path:"footer",component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
