import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  getData(): Article[] {
    let articles: Article[] = [];

    for (let articles of data) {
      articles = new Article(
        articles.title,
        articles.description,
        articles.author,
        articles.imageUrl)
    }

    return articles;
  }
}