import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/authentication/auth.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.users$ = this.authService.getAllUsers();
  }

  deleteUser(id: string) {
    this.authService.removeUser(id).subscribe();
  }

}
