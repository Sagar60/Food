import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodService } from 'src/app/shared/food.service';
import { Food } from 'src/app/shared/food.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  readonly Url = 'http://localhost:3000';
  constructor(  private fservive: FoodService, private sanitizer: DomSanitizer , private router: Router) { }
  public foods = [];

  ngOnInit(){
    this.getAllFoods();
  }

  getAllFoods(){
    this.fservive.getFood().subscribe(
      (res) =>{
        this.foods = res as Food[];
      });
  }

  getpic(fpic){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.Url + `/${fpic}`);
  }

  onBook(id){
    this.router.navigate([ 'userprofile/bookfood', { id: id} ]);
  }

}
