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
    "email": new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$')]),
    "password": new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  signIn() {


    // this.authService.login(this.signinForm.value)
    //   .subscribe(data => {
    //     console.log(data);
    //   });
  }
}
