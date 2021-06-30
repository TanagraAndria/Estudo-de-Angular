import { Component } from '@angular/core';
import {LoadingService } from './loader/loader.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loading: boolean= false;

  constructor(private _loading: LoadingService) {}

  ngOnInit(){
    this.listenToLoading();
  }

  listenToLoading(): void{
    this._loading.loadingSub
    .pipe(delay(0))
    .subscribe((loading) =>{
      this.loading = loading;
    });
  }
  
}

