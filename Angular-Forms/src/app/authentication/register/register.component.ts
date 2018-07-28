import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  registrationFailed: boolean;
  errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router) {
    this.model = new RegisterModel('', '', '', '', '', 18);
  }

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.model)
      .subscribe(success => {
        this.router.navigate(['/login'])
      }, err => {
        this.registrationFailed = true;
        this.errorMessage = err.error.description;
      });
  }
}
