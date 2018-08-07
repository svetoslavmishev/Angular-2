import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { FurnitureService } from '../furniture.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  bindModel: FurnitureModel;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.furnitureService.getBiId(this.id)
      .subscribe(data => {
        this.bindModel = data;
      });
  }

  edit() {
    this.furnitureService.editFurniture(this.id, this.bindModel)
      .subscribe();
  }
}
