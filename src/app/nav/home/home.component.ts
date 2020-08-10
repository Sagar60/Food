import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/shared/food.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fservice: FoodService, private router: Router, private sanitizer: DomSanitizer) { }

  public foods = [];
  readonly Url = 'http://localhost:3000';

  ngOnInit(){
    this.getAllFoods();
  }

  getAllFoods(){
    this.fservice.getFood().subscribe(
      (res) =>{
        this.foods = res as Food[];
      });
  }

  getpic(fpic){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.Url + `/${fpic}`);
  }

  onBook(id){
    this.router.navigate([ '/login', { id: id} ]);
  }
}
