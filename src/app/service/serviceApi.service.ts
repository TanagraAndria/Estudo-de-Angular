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
  private orderUrl= 'api/order';
  private newOrderUrl='api/orders';

  constructor( private http: HttpClient) {
    this.orderSubject = new BehaviorSubject <Order>({} as Order);
    this.order = this.orderSubject.asObservable();
  }

  getProducts() : Observable<Products[]>{
    return this.http.get<[Products]>(this.productsUrl);
  }

  getNewOrder(): Observable<any>{
    return this.http.get(this.newOrderUrl);
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
 
  public postOrder(order: any): Observable<Order>{
    return this.http.post<any>(this.orderUrl, order)
  }
}

