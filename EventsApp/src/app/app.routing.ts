import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninFormComponent } from './components/authentication/signin-form/signin-form.component';
import { SignupFormComponent } from './components/authentication/signup-form/signup-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth', children: [
      { path: 'signin', component: SigninFormComponent },
      { path: 'signup', component: SignupFormComponent }
    ]
  }
];