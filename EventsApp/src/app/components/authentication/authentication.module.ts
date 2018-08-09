import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authenticationComponents } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...authenticationComponents,
    SignupFormComponent
  ],
  exports: [
    ...authenticationComponents
  ]
})
export class AuthenticationModule { }
