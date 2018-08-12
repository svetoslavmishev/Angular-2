import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm = new FormGroup({
    "username": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$')]),
    "password": new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.authService
      .register(this.signupForm.value)
      .subscribe();
  }
}
