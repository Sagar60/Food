import { Injectable } from '@angular/core';
import { Food } from '../shared/food.model';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient ) { }
    
  readonly FoodUrl= 'http://localhost:3000/foods';
  readonly FoodUrl2 = 'http://localhost:3000/userfood';

  getFood(){
    return this.http.get(this.FoodUrl);
  }

  getfoodcatid(categoty_id: string){
    return this.http.get(this.FoodUrl2 + `/${categoty_id}`);
  }

  getfoodid(_id: string){
    return this.http.get(this.FoodUrl + `/${_id}`);
  }

}
