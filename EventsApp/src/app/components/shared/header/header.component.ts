import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdownMenu: string = "dropdown-menu";
  dropdownList: string = "nav-item dropdown";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService
      .logout()
      .subscribe(() => {
        localStorage.clear();
      });
  }

  expandMenu() {
    this.dropdownList.endsWith('show')
      ? this.dropdownList = "nav-item dropdown"
      : this.dropdownList = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = "dropdown-menu"
      : this.dropdownMenu = "dropdown-menu show";
  }
}
