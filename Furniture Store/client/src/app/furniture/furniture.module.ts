import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { furnitureComponents } from '.';
import { EditFurnitureComponent } from './edit-furniture/edit-furniture.component';
import { FormsModule } from '@angular/forms';
import { FurnitureService } from './furniture.service';
import { FurnitureRoutingModule } from './furniture.routing.module';
import { NgxPaginationModule } from '../../../node_modules/ngx-pagination/dist/ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    ...furnitureComponents,
    EditFurnitureComponent
  ],
  providers: [FurnitureService]
})
export class FurnitureModule { }
