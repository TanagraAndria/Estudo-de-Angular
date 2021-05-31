import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import { HallComponent } from './views/hall/hall.component';
import {Error404Component} from './views/error404/error404.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'hall', component: HallComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
