import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { CreateFurnitureModel } from '../models/create-furniture.model';
import { FurnitureModel } from '../models/furniture.model';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindModel: CreateFurnitureModel;
  model: FurnitureModel;

  constructor(private createFurnitureService: FurnitureService) {
    this.bindModel = new CreateFurnitureModel("", "", 1950, "", 1, "");
  }

  ngOnInit() {
  }

  create() {
    this.createFurnitureService.createFurniture(this.bindModel)
      .subscribe();
  }
}
