import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { MycartComponent } from './mycart/mycart.component';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
import { UserServices } from './user.service';
import { BuyerServices } from './buyer.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookdetailsComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CartServices,NewOrderServices,UserServices,BuyerServices],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
