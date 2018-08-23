import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm = new FormGroup({
    "username": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$')])
  });

  id: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.authService
      .getUserInfo(this.id)
      .subscribe(data => {
        this.userForm = new FormGroup({
          "username": new FormControl(data['username'], [Validators.required]),
          "email": new FormControl(data['email'], [Validators.required, Validators.pattern('^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$')])
        });
      })
  }

  updateUser() {
    this.authService
      .editUser(this.id, this.userForm.value)
      .subscribe();
  }
}
