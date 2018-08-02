import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateFurnitureModel } from './models/create-furniture.model';
import { FurnitureModel } from './models/furniture.model';

const baseUrl = 'http://localhost:5000/furniture';
const createUrl = `${baseUrl}/create`;
const allUrl = `${baseUrl}/all`;
const detailsUrl = `${baseUrl}/create/details/`;
const myUrl = `${baseUrl}/my`;
const deleteUrl = `${baseUrl}/delete/`;

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  createFurniture(data: CreateFurnitureModel) {
    return this.http.post(createUrl, data);
  }

  getAllFurnitures() {
    return this.http.get<FurnitureModel[]>(allUrl);
  }

  getFurnitureDetails(id: string) {
    return this.http.get<FurnitureModel>(detailsUrl + id);
  }

  getMyFurniture() {
    return this.http.get<FurnitureModel[]>(myUrl);
  }

  deleteFurniture(id: string) {
    return this.http.delete(deleteUrl + id);
  }
}
