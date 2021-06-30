import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ServiceApiService} from '../../../../service/serviceApi.service';
import {Products} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products: Array<Products> =[];
  Breakfast: Array <Products> =[];
  Burger: Array <Products> =[];
  Drinks: Array <Products> =[];
  Side: Array <Products> =[];
  listProducts: any =[];

  constructor(private productApi: ServiceApiService ) { }

  ngOnInit(): void {
    this.productApi.getProducts().subscribe((data) => {
      data.forEach(item =>{
        if ( item.menuSubType =='breakfast' ){
          this.Breakfast.push(item);
        }
         if ( item.menuSubType =='hamburguer' ){
           this.Burger.push(item);
         }
        if ( item.menuSubType =='drinks' ){
          this.Drinks.push(item);
        }
        if ( item.menuSubType =='side' ){
          this.Side.push(item);
        }
      });

      this.Products = data;
    })
  }

  getProducts(): Observable<Products []>{
    const products =  of (this.Products);
    return products;
  };

  teste(Products : any){
    let updated = this.productApi.getOrder();
    if(!updated.itensOrder){
      updated.itensOrder= new Array<Products>();
    }
    updated.itensOrder.push(Products);
    this.productApi.setOrder(updated);
    console.log("teste")
    console.log(this.productApi.getOrder())
  }
  

}
