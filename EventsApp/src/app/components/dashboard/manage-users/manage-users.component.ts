import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  userForm = new FormGroup({
    "username": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$')]),
    "password": new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  id: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createUser() {
    this.authService
      .register(this.userForm.value)
      .subscribe();
  }
}
