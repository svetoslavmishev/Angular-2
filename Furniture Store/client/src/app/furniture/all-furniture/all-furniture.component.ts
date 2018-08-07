import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures$: Observable<FurnitureModel[]>;
  pageSize: number = 4;
  currentPage: number = 1;

  constructor(
    private furnitureService: FurnitureService,
    private authService: AuthService) { }

  ngOnInit() {
    this.furnitures$ = this.furnitureService.getAllFurnitures();
  }

  pageChanged(page) {
    this.currentPage = page;
  }

  delete(id: string) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(() => {
        this.furnitures$ = this.furnitureService.getAllFurnitures();
      });
  }
}
