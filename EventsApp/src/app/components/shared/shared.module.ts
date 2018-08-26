import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from '.';
import { RouterModule } from "@angular/router";
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...sharedComponents,
    NotfoundComponent
  ],
  exports:[
    ...sharedComponents
  ]
})
export class SharedModule { }
