import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../../service/serviceApi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;;

  imageSrc = 'assets/img/logo.png'  
  imageAlt = 'logo'
 
  // contatos: Array<any>;
  register: any;
   
  constructor(
    private service: ServiceApiService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password:["", [Validators.required]],
      role:["", [Validators.required]],
      restaurant: ["johny´s burger"],
    })
  }

  // criar() {
  //   this.service.criar(this.contato).subscribe(data => this.contato = JSON.stringify(data),
  //   error => alert(error),
  //   () => console.log("acesso a api post ok...")
  //   );
  // }


}
