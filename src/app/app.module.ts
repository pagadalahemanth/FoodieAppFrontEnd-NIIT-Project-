import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
// import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminRestaurantComponent } from './admin-restaurant/admin-restaurant.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddToFavComponent } from './add-to-fav/add-to-fav.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RestaurantOwnerComponent } from './restaurant-owner/restaurant-owner.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { RestaurantNotFoundComponent } from './restaurant-not-found/restaurant-not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';

// import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    BodyComponent,
    SearchComponent,
    DisplayComponent,
    AddRestaurantComponent,
    AdminRestaurantComponent,
    CheckoutComponent,
    AddToFavComponent,
    AddToCartComponent,
    RestaurantOwnerComponent,
    OwnerDashboardComponent,
    RestaurantNotFoundComponent,
    PageNotFoundComponent,
    FooterComponent

    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
