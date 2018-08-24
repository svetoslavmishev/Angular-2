import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = "e01d09385a064ed19a0d1b2276990568";
const newsUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e01d09385a064ed19a0d1b2276990568`;


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(newsUrl);
  };
}

