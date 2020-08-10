import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './nav/home/home.component';

import { FormsModule } from  '@angular/forms' ;
import { AboutComponent } from './nav/about/about.component';
import { FoodComponent } from './nav/food/food.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Home2Component } from './userprofile/home2/home2.component';
import { About2Component } from './userprofile/about2/about2.component';
import { Food2Component } from './userprofile/food2/food2.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { FoodService } from './shared/food.service';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BookfoodComponent } from './userprofile/bookfood/bookfood.component';
import { ViewhistoryComponent } from './userprofile/viewhistory/viewhistory.component';
import { OrderService } from './shared/order.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserprofileComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    FoodComponent,
    SigninComponent,
    SignupComponent,
    Home2Component,
    About2Component,
    Food2Component,
    BookfoodComponent,
    ViewhistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }, UserService,CategoryService,FoodService,DatePipe, FoodService,OrderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
