import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute ) { }

  public id ='';


  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');

  }
  ongoMenu(){
    if(this.id == null)
      this.router.navigateByUrl('login');
    else{
      this.router.navigate( ['/login', { id:this.id } ] );
    }
  } 

  ongoMenu2(){
    if(this.id == null){
      this.router.navigateByUrl('signup');
    }
    else{
      this.router.navigate(['/signup', { id: this.id }]);
    }
  }

}
