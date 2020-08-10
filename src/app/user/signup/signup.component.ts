import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private uservice: UserService,private router: Router ) { }

  model ={
    fullName : '',
    email: '',
    phone: '',
    address: '',
    password: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSuccessMessage : boolean;
  showErrorMessage: string;
  ngOnInit(){
    
  }
  onSubmit(form: NgForm){
    this.uservice.reguser(form.value).subscribe(
      (res) => {
        swal(`Hi ${form.value.fullName.split(' ')[0]}, Welcome to Our Family`,"Your Account Successfully Created","success");
        this.showSuccessMessage =true;
        setTimeout( () => this.showSuccessMessage = false, 4000 );
        this.resetform(form);
        this.router.navigateByUrl('/login');
            },
      (err) =>{
        if( err.status === 422 )
          this.showErrorMessage = err.error.join('<br/>');
          else{
            this.showErrorMessage = 'Something Went Wronng'
          }
          swal("Warning", `${this.showErrorMessage}`, "warning");
      }
    )
  }
  resetform(form: NgForm){
    this.model = {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    };
    form.resetForm();
    this.showErrorMessage = '';
  }
}
