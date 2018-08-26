import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()

export class LoadingInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {

            this.spinner.hide();

          }
        }, error => {
          this.spinner.hide();         
        })
      )
  };
}