import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css']
})
export class About2Component implements OnInit {

  constructor(private uservice: UserService) { }
  userName;
  ngOnInit(){
    this.uservice.getuserProfile().subscribe(
    (res) =>{
      this.userName = res['reguser'];
    },
    err =>{
      console.log(err); //optonal
    }
    )
  }

}
