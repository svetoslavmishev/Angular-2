import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  model: FurnitureModel[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitureService.getAllFurnitures()
      .subscribe(data => {
        this.model = data;
      });
  }
}
