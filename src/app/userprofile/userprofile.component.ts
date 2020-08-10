import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userName;
  constructor(private uservice: UserService,private router: Router,private route: ActivatedRoute, private catService: CategoryService ) { }
  
  public id= '';
  public category = [];
  
  ngOnInit(){
    this.getAllcat();
    this.uservice.getuserProfile().subscribe(
      (res) => {
        this.userName = res['reguser'];
      },
      err =>{
        console.log(err);
      }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
  }

  onLogout(){
    this.uservice.deletetoken();
    swal("See You Again ","You Successfully Logout","success");
    this.router.navigate(['/login'])
  }

  getAllcat(){
    this.catService.getcat().subscribe(
      (res) =>{
        this.category = res as Category[];
      });
  }

  // trnsfer to food component for see that particular foods under this category 
  onFood(catname){
    this.router.navigate( ['userprofile/food_2', { id: catname }] )
  }

}
