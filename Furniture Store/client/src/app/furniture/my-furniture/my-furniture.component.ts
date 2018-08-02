import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';
import { CreateFurnitureModel } from '../models/create-furniture.model';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  model: FurnitureModel[];

  constructor(private myFurnitureService: FurnitureService) { }

  ngOnInit() {
    this.myFurnitureService.getMyFurniture()
      .subscribe(data => {
        //this.model = data;
      });
  }
}
