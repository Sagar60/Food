import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private catService: CategoryService,private router: Router ) {
    // for refresh the nav bar
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
   }

  public category = [];
  ngOnInit(){
    this.getallCat();
  }

  onFood(cat: string){
    this.router.navigate( [ '/nav/food', {id: cat} ] );
  }

  getallCat(){
    this.catService.getcat().subscribe(
      (res) =>{
        this.category = res as Category[];
      });
  }

  onclick(){
    this.router.navigateByUrl('/userprofile');
  }
}
