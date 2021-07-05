import { Component, OnInit } from '@angular/core';
import {Products} from '../products/product';
import {Order} from './order';
import {ServiceApiService} from '../../../../service/serviceApi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orderForm!: FormGroup;
  order: Order ={} as Order;
  valorTotal: number = 0;
  
  

  constructor( 
    private productApi: ServiceApiService,
    private fb: FormBuilder) {
    this.productApi.order.subscribe((data) => {
      this.order = data;
    })
   }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      user_id: ["14"],
      table: ["", [Validators.required]],
      client: ["", [Validators.required]],
      comments: [""],
      products: [""] })
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

  createOrder(){
    this.productApi.postOrder(this.orderForm.value).subscribe(result =>{});
    this.orderForm.reset();
    console.log ("Pedido criado")
  }

}
