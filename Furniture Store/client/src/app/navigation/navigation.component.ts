import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dropdownLi : string = "nav-item dropdown";
  dropdownMenu : string = "dropdown-menu";

  constructor(
    private router : Router,
    private authService : AuthService,
    private toastr: ToastrService
  ) {  }

  ngOnInit() {
  }
  
  logout() {
    this.authService.logout();    
    this.router.navigate(['/signin']);
    this.toastr.success('Logout successfully!', 'Success!');
  }

  expand() {
    this.dropdownLi.endsWith('show') 
    ? this.dropdownLi = "nav-item dropdown" 
    : this.dropdownLi = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
    ? this.dropdownMenu = "dropdown-menu"
    : this.dropdownMenu = "dropdown-menu show";
  }
}
