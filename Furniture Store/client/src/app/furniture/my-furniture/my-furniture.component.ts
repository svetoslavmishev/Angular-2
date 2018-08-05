import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>;
  pageSize: number = 4;
  currentPage: number = 1;

  constructor(private myFurnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitures$ = this.myFurnitureService.getMyFurniture();
  }

  delete(id: string) {
    this.myFurnitureService.deleteFurniture(id)
      .subscribe();
  }

  pageChanged(page) {
    this.currentPage = page;
  }
}
