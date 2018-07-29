import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  registrationFailed: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.model = new RegisterModel('', '', '', '', '', 18);
  }

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.model)
      .subscribe(success => {
        this.toastr.success('Please, login.', 'You have successfully registered!');
        this.router.navigate(['/login']);
      }, err => {
        this.registrationFailed = true;
        this.toastr.error(err.error.description, err.error.error);
        console.log(err);
      });
  }
}
