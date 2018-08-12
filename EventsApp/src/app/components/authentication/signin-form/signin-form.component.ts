import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  signinForm = new FormGroup({
    "username": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.signinForm.value)
      .subscribe();
  }
}
