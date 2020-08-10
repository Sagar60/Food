import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router, private uservice: UserService) {  }

    intercept(req: HttpRequest<any>, next: HttpHandler ){
        if(req.headers.get('noauth'))
            return next.handle(req.clone());
            else{
                const dclonereq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + this.uservice.gettoken() )
                });
                return next.handle(dclonereq).pipe(
                    tap(
                        event => {  },
                        err =>{
                            if(err.error.auth == false)
                                this.router.navigateByUrl('/login');
                        }
                    )
                );
            }
    }

}

