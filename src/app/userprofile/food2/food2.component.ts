import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/shared/food.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-food2',
  templateUrl: './food2.component.html',
  styleUrls: ['./food2.component.css']
})
export class Food2Component implements OnInit {

  public id = '';
  public foods = [];
  public foodurl = 'http://localhost:3000';
 
  constructor(private foodService: FoodService, private sanitizer: DomSanitizer, private router : Router,private route: ActivatedRoute) { 
    // for refresh the menu bar to see another cat items food 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false ;
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFoods(this.id);
  }

  getFoods(id){
    this.foodService.getfoodcatid(id).subscribe(
      (res) => {
        this.foods = res as Food[];
      }
    )
  }

  foodpic(fpic){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.foodurl + `/${fpic}`);
  }

  onBook(id){
    this.router.navigate(['userprofile/bookfood', { id: id }]);
  }

}

