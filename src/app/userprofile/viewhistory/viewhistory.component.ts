import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { OrderService } from 'src/app/shared/order.service';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {

  public userDetails;
  public email: '';
  public orders = [];
  
  constructor( private userService: UserService, private orderSer: OrderService, ) { }

  ngOnInit(){
    this.userService.getuserProfile().subscribe(
      (res) => {
        this.userDetails = res['reguser'];
        this.email = this.userDetails.email;
        console.log(this.email);
        this.getOrder();
      },
      err => {
        console.log(err);
      });
  }

  getOrder(){
    this.orderSer.getuserorder(this.email).subscribe(
      (res) => {
        this.orders = res as Order[];
      }
    )
  }

}
