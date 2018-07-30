import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Kinvey ${currentUser.token}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request)
      .pipe(tap((res: any) => {
        if (res instanceof HttpResponse && res.body.token) {
          localStorage.setItem('currentUser', JSON.stringify({
            "username": res.body.user.name,
            "authtoken": res.body.token
          }));
        }

        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')) {
          this.toastr.success(res.body.message, 'Success!');
          this.router.navigate(['/signin']);
        }

        if (res instanceof HttpResponse && res.body.success && res.url.endsWith('login')) {
          this.toastr.success(res.body.message,'Success!');
          this.router.navigate(['/furniture/all']);
        }
      }));
  }
}