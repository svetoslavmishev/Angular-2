import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  createForm = new FormGroup({
    "username": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$')]),
    "password": new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createUser() {
    this.authService
      .register(this.createForm.value)
      .subscribe();
  }
}
