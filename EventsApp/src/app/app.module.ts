import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AuthenticationModule } from './components/authentication/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { routes } from './app.routing';
import { SharedModule } from './components/shared/shared.module';
import { ServicesModule } from './core/services/services.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    SharedModule,
    ServicesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
