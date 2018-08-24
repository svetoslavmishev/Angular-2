import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpRequest, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler, } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from '../../../../node_modules/ngx-spinner';

const appKey = "kid_rymYd4nrm";
const appSecret = "91e94a2e95a34c539144bdd48fe3e35a";
const masterSecret = "9dfd2cec4cd8471e839b3a4f5e9c4d25";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { };

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = (JSON.parse(localStorage.getItem('currentUser')));

    this.spinner.show();

    if (currentUser) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Kinvey ${currentUser.token}`,
          'Content-Type': 'application/json'
        }
      });
    }

    if (currentUser === null || (currentUser.roles && this.router.url.endsWith('dashboard/create'))) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
          'Content-Type': 'application/json'
        }
      });
    }

    if (currentUser && currentUser.roles && this.router.url.match('/events/details/') && request.method === 'PUT') {
      request = request.clone({
        setHeaders: {
          'Authorization': `Kinvey ${currentUser.token}`,
          //'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
          'Content-Type': 'application/json'
        }
      });
    }

    if (currentUser === null && this.router.url.endsWith('allevents')) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
          'Content-Type': 'application/json'
        }
      });
    }

    if (currentUser && currentUser.roles && request.url.endsWith('/_restore')
      || (currentUser === null && this.router.url.endsWith('allevents'))) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
          'Content-Type': 'application/json'
        }
      });
    }


    return next.handle(request)
      .pipe(tap((res: any) => {
        if (res instanceof HttpResponse && res.ok && request.url.endsWith('login')) {
          localStorage.setItem(
            'currentUser', JSON.stringify(
              {
                'username': res.body.username,
                'token': res.body._kmd.authtoken,
                'creatorID': res.body._acl.creator,
                'roles': res.body._kmd.roles
              }
            ));
        }

        if (res instanceof HttpResponse && res.ok && this.router.url.endsWith('signup')) {
          this.toastr.success('You have successfully signed up! Now you should be able to sighin.', "Success!");
          this.router.navigate(['/auth/signin']);
        };

        if (res instanceof HttpResponse && res.ok && this.router.url.endsWith('dashboard/create')) {
          this.toastr.success('User created successfully!', "Success!");
          this.router.navigate(['auth/dashboard']);
        };

        if (res instanceof HttpResponse && res.status === 200 && request.method === 'PUT' && this.router.url.match('/auth/dashboard/edit/')) {
          this.toastr.success('User updated successfully!', "Success!");
          this.router.navigate(['auth/dashboard']);
        };

        if (res instanceof HttpResponse && request.method === 'DELETE' && request.url.endsWith('?hard=true')) {
          this.toastr.success('User deleted successfully!', "Success!");
          this.router.navigate(['auth/dashboard']);
        };

        if (res instanceof HttpResponse && res.ok && this.router.url.endsWith('signin')) {
          this.toastr.success('You have successfully signed in!', "Success!");
          //TODO => SHOULD REDIRECT TO PAGE WITH EVENTS
          this.router.navigate(['/home']);
        };

        if (res instanceof HttpResponse && res.ok && request.url.endsWith('_logout')) {
          this.toastr.success('You have successfully logged out!', "Success!");
          this.router.navigate(['/auth/signin']);
        };

        if (res instanceof HttpResponse && res.status === 201 && request.method === 'POST' && this.router.url.endsWith('events/create')) {
          this.toastr.success('New event created!', 'Success!');
          this.router.navigate(['/allevents']);
        }

        if (res instanceof HttpResponse && res.status === 200 && request.method === 'DELETE') {
          this.toastr.success('Event deleted successfully!', 'Success!');
          this.router.navigate(['allevents']);
        }

        if (res instanceof HttpResponse && res.status === 200 && request.method === 'PUT') {

          if (this.router.url.match('/events/details/[a-z0-9]+$')) {
            this.toastr.success('You have just reserved you seat!', 'Success!');
            this.router.navigate(['allevents']);
          } else if (this.router.url.match('/events/edit/[a-z0-9]+$')) {
            this.toastr.success('Event editted successfully!', 'Success!');
            this.router.navigate(['/events/my']);
          }
        }
      }));
  }
}