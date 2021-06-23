import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../../../../service/serviceApi.service';
import {Order} from '../order/order';
import {Products} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Itens: Array<Products> =[];
  listItens: any =[];

  constructor(private prductApi: ServiceApiService ) { }

  ngOnInit(): void {
    this.prductApi.getProduct().subscribe((data) => {
      this.Itens = data;
    })
  }

  teste(item : any){
    let updated = this.prductApi.getOrder();
    if(!updated.itensOrder){
      updated.itensOrder= new Array<Products>();
    }
    updated.itensOrder.push(item);
    this.prductApi.setOrder(updated);
  }

}
