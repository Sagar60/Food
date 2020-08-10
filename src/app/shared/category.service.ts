import { Injectable } from '@angular/core';
import { Category } from '../shared/category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient ) { }

  readonly catUrl = 'http://localhost:3000/categories';
  getcat(){
    return this.http.get(this.catUrl);
  }

  
}
