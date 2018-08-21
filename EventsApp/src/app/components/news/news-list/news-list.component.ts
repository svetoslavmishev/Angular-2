import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news;
  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.newsService
      .getNews()
      .subscribe(data => {
        this.news = data;
        console.log(data);
      });
  };
}
