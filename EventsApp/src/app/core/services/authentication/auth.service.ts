import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninInputModel } from '../../models/input-models/signin-input.model';
import { SignupInputModel } from '../../models/input-models/signup-input.model';

const appKey = "kid_rymYd4nrm";
const signUpUrl = `https://baas.kinvey.com/user/${appKey}`;
const signInUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: SignupInputModel) {
    return this.http.post(signUpUrl, body);
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
}
