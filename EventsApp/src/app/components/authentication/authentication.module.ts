import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authenticationComponents } from '.';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    ...authenticationComponents
  ],
  exports: [...authenticationComponents]
})
export class AuthenticationModule { }
