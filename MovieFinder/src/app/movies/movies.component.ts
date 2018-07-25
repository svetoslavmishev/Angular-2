import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Array<Movie>
  theaters: Array<Movie>;
  kids: Array<Movie>;
  drama: Array<Movie>;
  searchResult: any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getPopularMovies()
      .subscribe(data => {
        this.popular = data.results;
      });

    this.moviesService
      .getTheaterMovies()
      .subscribe(data => {
        this.theaters = data.results;
      });

    this.moviesService
      .getKidsMovies()
      .subscribe(data => {
        this.kids = data.results;
      });

    this.moviesService
      .getBestDramaMovies()
      .subscribe(data => {
        this.drama = data.results;
      });
  }

  search(query) {
    let queryValue = query.search;
    this.moviesService
      .searchMovie(queryValue)
      .subscribe(movies => {
        this.searchResult = movies.results;
      });
  }
}
