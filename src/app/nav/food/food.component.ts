import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/shared/food.service';
import { Food } from 'src/app/shared/food.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public id='';
  public foods = [];
  public apiurl = 'http://localhost:3000';

  constructor( private router: Router, private route: ActivatedRoute, private fservice: FoodService,private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getcatfood(this.id);
  }

  getcatfood(id){
    this.fservice.getfoodcatid(id).subscribe(
      (res) => {
        this.foods = res as Food[];
        // console.log(this.foods);
      });
  }

  getpic(fpic){
    return this.sanitizer.bypassSecurityTrustResourceUrl( this.apiurl + `/${fpic}` );
  }

  onBook(id: string){
    this.router.navigate(['/login',{id: id}])
  }
}
