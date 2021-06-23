import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})

export class HallComponent implements OnInit {

  imageSrc = 'assets/img/logo.png'; 
  imageAlt = 'logo';
  // Products: any;
  // Drinks:any;
  // Follow:any;
  
  constructor(
    
  ) { }

  ngOnInit() {
    // this.getProducts();
    // this.getDrinks();
    // this.getFollow ();
  }

  // getProducts (){
  //   this.productService.getAllProducts().subscribe((products:any) => {
  //     this.Products= products;
  //   }, error =>{
  //     console.log(error)
  //   });
  // }

  // getDrinks () {
  //   this.productService.getAllDrinks().subscribe((drinks:any) =>{
  //     this.Drinks = drinks;
  //   }, error =>{
  //     console.log(error)
  //   });
  // }

  // getFollow () {
  //   this.productService.getAllFollow().subscribe((follow:any) =>{
  //     this.Follow = follow;
  //   }, error =>{
  //     console.log(error)
  //   });
  // }


}

