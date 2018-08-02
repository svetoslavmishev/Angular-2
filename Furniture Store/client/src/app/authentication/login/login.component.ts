import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  loginFailed: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.model)
      .subscribe(success => {
        this.toastr.success('You have successfully logged in!')
        this.loginSuccess(success);
      }, err => {
        this.loginFailed = true;
        this.toastr.error(err.error.description, err.error.error);
      });
  }

  loginSuccess(data) {    
    localStorage.setItem('authtoken', data._kmd.authtoken);
    localStorage.setItem('username', data.username);
    this.router.navigate(['/home']);
  }

}
