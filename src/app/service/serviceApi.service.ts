import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../views/hall/components/order/order';
import { Products } from '../views/hall/components/products/product';
import { Register } from '../views/register/register';

@Injectable({
  providedIn: 'root'
})

export class ServiceApiService {
  private orderSubject: BehaviorSubject<Order>
  public order: Observable <any>;
  private productsUrl ='api/products';
  private registerUrl = 'api/users';

  constructor( private http: HttpClient) {
    this.orderSubject = new BehaviorSubject <Order>({} as Order);
    this.order = this.orderSubject.asObservable();
  }

  getProducts() : Observable<Products[]>{
    return this.http.get<[Products]>(this.productsUrl);
  }

  getOrder() {
    return this.orderSubject.value;
  }
  
  setOrder (valor: Order) {
    this.orderSubject.next(valor);
  }

  public postUsers(register: any): Observable<Register>{
    return this.http.post<any>(this.registerUrl, register)
  }
 
}

// newUser(){
//   var user ={name: "",
//     email: "",
//     password: "",
//     role: "",
//     restaurant: "johny´s burger",}
// }

// postUsers(){
//   return this.http.post<Register>(this.registerUrl)
// }


 // criar(user: any) {
  //   return this.http.post(this.userUrl, user);
  // }

  // postJSON() {
  //   var json = JSON.stringify({
  //     name: "",
  //     email: "",
  //     password: "",
  //     role: "",
  //     restaurant: "johny´s burger",
  //   });
  //   var params = 'json=' + json;
  //   var cabe = new Headers();
  //   cabe.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.post(this.userUrl,params)
  // }