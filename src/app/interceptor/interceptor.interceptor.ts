import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, delay, finalize, map } from 'rxjs/operators';
import { LoadingService } from '../loader/loader.service';
import { throwError } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor( private _loading: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loading.setLoading(true, request.url);
    return next
    .handle(request)
    .pipe(
      delay(500),
      catchError((error: HttpErrorResponse) =>{
        return throwError(error);
      }),
      finalize(()=> this._loading.setLoading(false, request.url))
    );
    // return next.handle(request)
    //   .pipe(catchError((err) => {
    //     this._loading.setLoading(false, request.url);
    //     return err;
    //   }))
    //   .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
    //     if (evt instanceof HttpResponse) {
    //       this._loading.setLoading(false, request.url);
    //     }
    //     return evt;
    //   }));
  }
}
