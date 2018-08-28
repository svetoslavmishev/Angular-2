import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { SharedModule } from './components/shared/shared.module';
import { ServicesModule } from './core/services/services.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllEventsComponent } from './components/all-events/all-events.component';

import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { ErrorIntercptor } from './core/interceptors/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllEventsComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    SharedModule,
    ServicesModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
