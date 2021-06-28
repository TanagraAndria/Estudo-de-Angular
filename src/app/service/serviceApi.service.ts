import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../views/hall/components/order/order';
import { Products } from '../views/hall/components/products/product';

@Injectable({
  providedIn: 'root'
})

export class ServiceApiService {
  private orderSubject: BehaviorSubject<Order>
  public order: Observable <any>;
  private productsUrl ='api/products';

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

}
