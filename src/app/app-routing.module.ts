import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './nav/home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './nav/about/about.component';
import { FoodComponent } from './nav/food/food.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { Home2Component } from './userprofile/home2/home2.component';
import { About2Component } from './userprofile/about2/about2.component';
import { Food2Component } from './userprofile/food2/food2.component';
import { AuthGuard } from './auth/auth.guard';
import { BookfoodComponent } from './userprofile/bookfood/bookfood.component';
import { ViewhistoryComponent } from './userprofile/viewhistory/viewhistory.component';

const routes: Routes = [
  {
    path: 'login', component: UserComponent,
    children : [ { path : '', component:SigninComponent } ]
  },
  {
    path: 'signup', component: UserComponent,
    children: [ { path: '', component: SignupComponent } ] 
  },
  {
    path: 'nav', component: NavComponent,
    children: [{ path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    { path : 'food' , component : FoodComponent}

    ]
  },
  {
    path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard],
    children: [ { path: 'home_2', component: Home2Component },
    { path: 'bookfood', component: BookfoodComponent },
    { path: 'viewhistory', component: ViewhistoryComponent },
    { path: 'about_2', component: About2Component },
    { path: 'food_2', component: Food2Component }
   ]
  },

  {
    path: '', redirectTo: '/nav/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
