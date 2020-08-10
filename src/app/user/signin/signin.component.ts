import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router : Router, private uservice: UserService) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public id ='';
  serverErrorMessage: string;
  model = {
    email :'',
    password : ''
  };

  ngOnInit() {
    if(this.uservice.isLoggedIn()){
      this.router.navigateByUrl('/userprofile');
    }
    this.id = this.route.snapshot.paramMap.get('id');
  } 
  
  onSubmit(form: NgForm){
    this.uservice.loginuser(form.value).subscribe(
      (res) =>{
        this.uservice.settoken(res['token']);
        swal("Hi User Welcome Back","Click Ok to Continue","success");
        if(this.id === null ){
          this.router.navigateByUrl('userprofile/home_2');
        }
        else{
          this.router.navigate([ '/userprofile/bookfood', { id: this.id } ]);
        }
      },
        err =>{
          this.serverErrorMessage = err.error.message;
          swal( "Warning", `${this.serverErrorMessage}`, "warning");
        } 
    )
  }
}
