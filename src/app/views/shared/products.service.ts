import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class productsService {

  apiUrl ='https://bq-acka-burger.herokuapp.com/api/products';

  
  
  products = [
    {"id":5,"name":"Hambúrguer","type":"Simples","price":15,"flavor":"carne","complement":null,"image":"https://i.ibb.co/X72RLZ0/burger-meat.png","menuType":"all-day","menuSubType":"hamburguer"},
    {"id":6,"name":"Hambúrguer","type":"Simples","price":15,"flavor":"frango","complement":null,"image":"https://i.ibb.co/HtgRP5b/burger-chicken.png","menuType":"all-day","menuSubType":"hamburguer"},
    {"id":7,"name":"Hambúrguer","type":"Simples","price":15,"flavor":"vegetariano","complement":null,"image":"https://i.ibb.co/Ybg2FzK/burger-veggie.png","menuType":"all-day","menuSubType":"hamburguer"},
    {"id":8,"name":"Hambúrguer","type":"Simples","price":17,"flavor":"carne","complement":"queijo","image":"https://i.ibb.co/X72RLZ0/burger-meat.png","menuType":"all-day","menuSubType":"hamburguer"},
    {"id":14,"name":"Hambúrguer","type":"Duplo","price":20,"flavor":"carne","complement":null,"image":"https://i.ibb.co/X72RLZ0/burger-meat.png","menuType":"all-day","menuSubType":"hamburguer"},
    {"id":15,"name":"Hambúrguer","type":"Duplo","price":20,"flavor":"frango","complement":null,"image":"https://i.ibb.co/HtgRP5b/burger-chicken.png","menuType":"all-day","menuSubType":"hamburguer"},
    {"id":16,"name":"Hambúrguer","type":"Duplo","price":20,"flavor":"vegetariano","complement":null,"image":"https://i.ibb.co/Ybg2FzK/burger-veggie.png","menuType":"all-day","menuSubType":"hamburguer"},
  ];
  follow=[
    {"id":23,"name":"Batata frita","type":null,"price":10,"flavor":null,"complement":null,"image":"https://i.ibb.co/cyQy9w3/fries.png","menuType":"all-day","menuSubType":"side"},
    {"id":24,"name":"Anéis de cebola","type":null,"price":10,"flavor":null,"complement":null,"image":"https://i.ibb.co/JsKQHqN/onion-rings.png","menuType":"all-day","menuSubType":"side"},
  ];

  drinks =[
    {"id":25,"name":"Água 500ml","type":null,"price":7,"flavor":null,"complement":null,"image":"https://i.ibb.co/56dFP17/water.png","menuType":"all-day","menuSubType":"drinks"},
    {"id":26,"name":"Água 250ml","type":null,"price":5,"flavor":null,"complement":null,"image":"https://i.ibb.co/56dFP17/water.png","menuType":"all-day","menuSubType":"drinks"},
    {"id":27,"name":"Refrigerante 500ml","type":null,"price":7,"flavor":null,"complement":null,"image":"https://i.ibb.co/sPxdh3K/soda.png","menuType":"all-day","menuSubType":"drinks"},
    {"id":28,"name":"Refrigerante 250ml","type":null,"price":5,"flavor":null,"complement":null,"image":"https://i.ibb.co/sPxdh3K/soda.png","menuType":"all-day","menuSubType":"drinks"},
    {"id":4,"name":"Suco de fruta natural","type":null,"price":7,"flavor":null,"complement":null,"image":"https://i.ibb.co/88sMChv/juice.png","menuType":"breakfast","menuSubType":"breakfast"},
  ];
  
  constructor( private httpClient: HttpClient) { }


  getAllProducts(): Observable<any> {
    
    return  from ( Promise.resolve(this. products) );

  
      // return from(
      //   fetch(
      //     this.apiUrl, 
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       method: 'GET', // GET, POST, PUT, DELETE
      //       mode: 'no-cors' // the most important option
      //     }
      //   ));

    
    //return this.httpClient.get<any>(this.apiUrl,{headers: headers});
  }

  getAllDrinks(): Observable<any> {
    
    return  from ( Promise.resolve(this.drinks) );
  }

  getAllFollow(): Observable<any> {
    
    return  from ( Promise.resolve(this.follow) );
  }

}

