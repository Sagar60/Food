import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router, private uService: UserService ) {  }
  // it's used for check user of the profile logged in or not

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(!this.uService.isLoggedIn()){
      this.router.navigateByUrl('/login');
      this.uService.deletetoken();
      return false;
    }
    return true;
    }
}