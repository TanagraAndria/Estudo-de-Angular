import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../views/hall/components/order/order';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  private orderSubject: BehaviorSubject<Order>
  public order: Observable <any>;

  constructor( private http: HttpClient) {
    this.orderSubject = new BehaviorSubject <Order>({} as Order);
    this.order = this.orderSubject.asObservable();
  }

  getProduct() : Observable<any>{
    return this.http.get('/api/products');
  }

  getOrder() {
    return this.orderSubject.value;
  }

  setOrder (valor: Order) {
    this.orderSubject.next(valor);
  }

}
