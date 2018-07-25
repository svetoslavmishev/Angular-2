import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

const apiKey = '76b5616649a427ed2b1f545bc7877a14';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theater: string = `discover/movie?primary_release_date.gte=2018-01-01&primary_release_date.lte=${Date.now()}`;
  kids: string = `discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc`;
  drama: string = `discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`;
  details: string = `movie/`;
  authentication: string = '&api_key=';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movies> {
    return this.http
      .get<Movies>(this.path + this.popular + this.authentication + apiKey);
  }

  getTheaterMovies(): Observable<Movies> {
    return this.http
      .get<Movies>(this.path + this.theater + this.authentication + apiKey);
  }

  getKidsMovies(): Observable<Movies> {
    return this.http
      .get<Movies>(this.path + this.kids + this.authentication + apiKey);
  }

  getBestDramaMovies(): Observable<Movies> {
    return this.http
      .get<Movies>(this.path + this.drama + this.authentication + apiKey);
  }

  getMovieById(id) {
    return this.http
      .get<Movies>(this.path + this.details + id + `?api_key=` + apiKey);
  }
}
