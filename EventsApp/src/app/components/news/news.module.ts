import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsComponents } from '.';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    ...newsComponents
  ],
  exports: [...newsComponents]
})
export class NewsModule { }
