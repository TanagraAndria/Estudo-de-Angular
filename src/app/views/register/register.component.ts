import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../../service/serviceApi.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  imageSrc = 'assets/img/logo.png'  
  imageAlt = 'logo'
  register: any;
   
  constructor(
    private rest: ServiceApiService,
    private fb: FormBuilder,
    ) { }
 
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password:["", [Validators.required]],
      role:["salao"],
      restaurant: ["johny´s burger"],
    })
  }

  createUser(){
    this.rest.postUsers(this.registerForm.value).subscribe(result =>{});
    console.log("ok")
  }

}
