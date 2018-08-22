import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninFormComponent } from './components/authentication/signin-form/signin-form.component';
import { SignupFormComponent } from './components/authentication/signup-form/signup-form.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { EventsRoutingModule } from './components/events/events-routing.module';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'auth/signin', component: SigninFormComponent },
  { path: 'auth/signup', component: SignupFormComponent },
  { path: 'auth/dashboard', canActivate: [AdminGuard], component: DashboardComponent },
  { path: 'events', canActivate: [AuthGuard], loadChildren: () => EventsRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

