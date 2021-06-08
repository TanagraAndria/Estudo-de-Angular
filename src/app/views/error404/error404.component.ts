import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
  imageSrc = 'assets/img/404.gif'  
  imageAlt = '404'

  constructor() { }

  ngOnInit(): void {
  }

}
