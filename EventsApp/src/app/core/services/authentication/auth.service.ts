import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninInputModel } from '../../models/input-models/signin-input.model';
import { SignupInputModel } from '../../models/input-models/signup-input.model';
import { retry } from 'rxjs/operators';

const appKey = "kid_rymYd4nrm";
const userUrl = `https://baas.kinvey.com/user/${appKey}/`;
const signInUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: SignupInputModel) {
    return this.http.post(userUrl, body);
  };

  login(body: SigninInputModel) {
    return this.http.post(signInUrl, body);
  };

  logout() {
    return this.http.post(logoutUrl, '');
  };

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  };

  isAdministrator(): boolean {
    if (localStorage.getItem('currentUser') !== null) {
      let user = JSON.parse(localStorage.getItem('currentUser'));

      return user.roles ? true : false;
    }
  };

  getAuthenticatedUsername() {
    if (localStorage.getItem('currentUser') !== null) {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      return user.username;
    }
  }

  getAllUsers() {
    return this.http.get(userUrl + '?query={}&sort={"_kmd.ect": 1}');
  }

  removeUser(id: string) {
    return this.http.delete(userUrl + id + '?hard=true');
  }

  getUserInfo(id: string) {
    return this.http.get(userUrl + id);
  }

  suspendUser(id: string) {
    return this.http.delete(userUrl + id + '?soft=true');
  }

  restoreSuspendUSer(id: string) {
    return this.http.post(userUrl + id + '/_restore', '');
  }
}
