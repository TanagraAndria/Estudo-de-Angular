import { Component, OnInit } from '@angular/core';
import {productsService} from '../shared/products.service';
import {Products} from '../model/product';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})

export class HallComponent implements OnInit {

  imageSrc = 'assets/img/logo.png'; 
  imageAlt = 'logo';
  Products: any;
  
  constructor(
    public productService: productsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts (){
    this.productService.getAllProducts().subscribe((products:any) => {
      console.log('sucesso: ' , products);
      this.Products= products;
    }, error =>{
      console.log(error)
    });
  }
  
}

