import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showHideBtn: boolean = false;
  showReadMoreBtn: boolean = true;
  imageButtonTitle: string = 'Show Image';
  imageIsShown: boolean = false;

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  ngOnInit() {
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.articleDescLen = 0;
    this.descToShow = '';
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}