import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/authentication/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.refresh();
  }

  deleteUser(id: string) {
    this.authService
      .removeUser(id)
      .subscribe(() => {
        this.refresh();
      });
  }

  userInfo(id: string) {
    this.authService
      .getUserInfo(id)
      .subscribe();
  }

  suspendUserProfile(id: string) {
    this.authService
      .suspendUser(id)
      .subscribe(() => {
        this.refresh();
      });
  }

  restoreUserProfile(id: string) {
    this.authService
      .restoreSuspendUSer(id)
      .subscribe();
  }

  refresh() {
    this.users$ = this.authService.getAllUsers();
  }
}
