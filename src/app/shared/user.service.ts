import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user.model'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser : User = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  };

  noAuthHeader = { headers: new HttpHeaders( { 'NoAuth': 'True' }) };

  constructor( private http: HttpClient ) { }
  
  // for 1st time user singup
  reguser(user: User){
    return this.http.post(environment.apiBaseUrl + '/register1', user, this.noAuthHeader );
  }

  //for check the user  
  loginuser(user: User){
    return this.http.post( environment.apiBaseUrl + '/auth1', user, this.noAuthHeader );
  }

  // for user details getting from token
  getuserProfile(){
    return this.http.get( environment.apiBaseUrl + '/reguserProfile' );
  }

  // for token related 
  
  //set the token
  settoken(token: string){
    localStorage.setItem( 'token',token);
  }
  // to get the token
  gettoken(){
    return localStorage.getItem('token');
  }
  // to delete the token
  deletetoken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.gettoken();
    if(token){
      var userpayload = atob(token.split('.')[1]);
      return JSON.parse(userpayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn(){
    var userpayload = this.getUserPayload();
    if(userpayload){
      return userpayload.exp > Date.now() / 1000;
    }
    else
      return false;
  }

}
