import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigninInputModel } from '../../models/input-models/signin-input.model';
import { SignupInputModel } from '../../models/input-models/signup-input.model';

const appKey = "";
const appSecret = "";
const signUpUrl = `https://baas.kinvey.com/user/${appKey}`;
const signInUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


}
