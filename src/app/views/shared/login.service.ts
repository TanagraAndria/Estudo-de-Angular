import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // apiUrl ='https://bq-acka-burger.herokuapp.com/api/users';
  // constructor( private http: HttpClient) { }

  // async login (user : any) {
  //   const result = await this.http.post<any>(this.apiUrl, user).toPromise();
  //   if (result && result.access_token) {
  //     window.localStorage.setItem('token', result.access_token);
  //     return true;
  //   }
  // }

  // createAccount(account : any){
  //   return new Promise ((resolve) => {resolve (true);});
  // }
}
