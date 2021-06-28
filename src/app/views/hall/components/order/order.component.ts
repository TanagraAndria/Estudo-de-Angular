import { Component, OnInit } from '@angular/core';
import {Products} from '../products/product';
import {Order} from './order';
import {ServiceApiService} from '../../../../service/serviceApi.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order ={} as Order;
  valorTotal: number = 0;

  constructor( private productApi: ServiceApiService) {
    this.productApi.order.subscribe((data) => {
      this.order = data;
    })
   }

  ngOnInit(): void {
  }
  getValor(){
    this.valorTotal =0;
    if(this.order && this.order.itensOrder){
      this.order.itensOrder.forEach ((Element: Products) => {
        this.valorTotal += Element.price;
      });
    }
    return this.valorTotal;
  }

}
