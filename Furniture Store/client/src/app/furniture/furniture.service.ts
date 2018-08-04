import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateFurnitureModel } from './models/create-furniture.model';
import { FurnitureModel } from './models/furniture.model';

const baseUrl = 'http://localhost:5000';
const createUrl = `${baseUrl}/furniture/create`;
const allUrl = `${baseUrl}/furniture/all`;
const detailsUrl = `${baseUrl}/furniture/details/`;
const myUrl = `${baseUrl}/furniture/mine`;
const deleteUrl = `${baseUrl}/furniture/delete/`;

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
