import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  logoutUser() {
    this.authService.logout()
      .subscribe(success => {
        localStorage.clear();
        this.authService.authtoken = "";
        this.router.navigate(['/login']);
        this.toastr.success('You have successfully logout!');
      });
  }
}
