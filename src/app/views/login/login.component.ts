import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {LoginService} from  '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };

  imageSrc = 'assets/img/logo.png'  
  imageAlt = 'logo'
 
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

 

}
