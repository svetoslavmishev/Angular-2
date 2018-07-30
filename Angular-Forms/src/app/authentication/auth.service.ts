import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';

const appKey = "kid_HkS_eecNm";
const appSecret = "49ed2f7e1844421e8ba19e4ae610ba58";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthenticationService {
  private currentAuthToken: string;

  constructor(private http: HttpClient) { }

  private createAuthHeadres(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      });
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      });
    }
  }

  login(model: LoginModel) {
    return this.http.post(
      loginUrl,
      JSON.stringify(model),
      {
        headers: this.createAuthHeadres('Basic')
      }
    );
  }

  register(model: RegisterModel) {
    return this.http.post(
      registerUrl,
      JSON.stringify(model),
      {
        headers: this.createAuthHeadres('Basic')
      }
    );
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeadres('Kinvey')
      }
    );
  }

  isUserLoggedIn() {
    return this.currentAuthToken === localStorage.getItem('authtoken');
  }

  get authtoken() {
    return this.currentAuthToken;
  }

  set authtoken(data: string) {
    this.currentAuthToken = data;
  }
}