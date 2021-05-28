import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  imageSrc = 'assets/img/logo.png'  
  imageAlt = 'logo'

  constructor() { }

  ngOnInit(): void {
  }

}
