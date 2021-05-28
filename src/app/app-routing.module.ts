import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './views/login/login.component';
import { HallComponent } from './views/hall/hall.component';

const routes: Routes = [
  {
    path: '',
    component: HallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
