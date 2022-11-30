import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData= new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router:Router) {
    if(sessionStorage.getItem('userToken')){
      this.saveUserData();
    }
   }
  signup(formData: any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formData)
  }
  signin(formData: any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', formData)
  }
  saveUserData() {
    let encoded = JSON.stringify(sessionStorage.getItem('userToken'));
    let decoded:any = jwtDecode(encoded);
    this.userData.next(decoded);
  }
  signOut(){
    sessionStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }

}
