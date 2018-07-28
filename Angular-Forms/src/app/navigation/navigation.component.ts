import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logoutUser() {
    this.authService.logout()
      .subscribe(success => {
        localStorage.clear();
        this.authService.authtoken = "";
      });
  }
}
