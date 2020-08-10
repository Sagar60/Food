import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/food.model';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FoodService } from 'src/app/shared/food.service';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-bookfood',
  templateUrl: './bookfood.component.html',
  styleUrls: ['./bookfood.component.css']
})
export class BookfoodComponent implements OnInit {

  userDetails;
  public id = '';
  public selectedFood = new Food();
  myDate = new Date();
  public mydate;

  constructor(private uservice: UserService, private router: Router, private route: ActivatedRoute,
    private datepipe: DatePipe, private fservice: FoodService, private orderService: OrderService
    ) { this.mydate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd'); 
   }

  ngOnInit(){
    this.uservice.getuserProfile().subscribe(
      res =>{
        this.userDetails = res['reguser'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);
      }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFood(this.id);
  }
  getFood(id){
    this.fservice.getfoodid(id).subscribe(
      (res) =>{
        this.selectedFood = res as Food;
        console.log(this.selectedFood);
      },
      (err) =>{
        console.log(err);
      });
  }

  onSubmit(form: NgForm){
    form.value.price = form.value.fprice * form.value.quan;
    form.value.date = this.mydate;
    this.orderService.insertOrder(form.value).subscribe(
        data => console.log('Success', data),
        error => console.log('Error', error)
    );
      alert('Your Booking is Confirmed');
      this.router.navigateByUrl('userprofile/viewhistory');
  }

}
