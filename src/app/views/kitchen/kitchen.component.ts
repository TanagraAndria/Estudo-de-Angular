import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../../service/serviceApi.service';
import { Kitchen } from './kitchen';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  imageSrc = 'assets/img/logo.png'; 
  imageAlt = 'logo';

 
  Itens: Array<Kitchen> =[];
  listItens: any =[];
  constructor(private productApi: ServiceApiService) { }

  ngOnInit(): void {
    this.productApi.getNewOrder()
    console.log('get')
  }

 
}
