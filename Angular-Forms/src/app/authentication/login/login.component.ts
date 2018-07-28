import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  loginFailed: boolean;
  errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.model)
      .subscribe(success => {
        this.loginSuccess(success);
      }, err => {
        this.loginFailed = true;
        this.errorMessage = err.error.description;
      });
  }

  loginSuccess(data) {
    this.authService.authtoken = data._kmd.authtoken;
    localStorage.setItem('authtoken', data._kmd.authtoken);
    localStorage.setItem('username', data.username);
    this.router.navigate(['/home']);
  }

}
