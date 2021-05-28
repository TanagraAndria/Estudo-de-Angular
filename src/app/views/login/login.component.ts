import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imageSrc = 'assets/img/logo.png'  
  imageAlt = 'logo'
 
  constructor() { }

  ngOnInit(): void {
  }

}

