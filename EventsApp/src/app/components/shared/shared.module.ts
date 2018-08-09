import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from '.';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...sharedComponents
  ],
  exports:[
    ...sharedComponents
  ]
})
export class SharedModule { }
