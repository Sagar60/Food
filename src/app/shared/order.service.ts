import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly bookUrl = 'http://localhost:3000/order';
  readonly orderUrl = 'http://localhost:3000/userorder';

  constructor(private http: HttpClient ) { }

  insertOrder(order: Order){
    return this.http.post(this.bookUrl ,order );
  }
  getuserorder(cemail: string){
    return this.http.get('http://localhost:3000/userorder' + `/${cemail}`);
  }
}
