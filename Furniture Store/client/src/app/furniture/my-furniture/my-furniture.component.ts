import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>;

  constructor(private myFurnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitures$ = this.myFurnitureService.getMyFurniture();
  }

  delete(id: string) {
    this.myFurnitureService.deleteFurniture(id)
      .subscribe();
  }
}
