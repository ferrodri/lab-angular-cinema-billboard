import { Injectable } from '@angular/core';
import { Sample } from '../../sample-movies'

@Injectable()
export class MoviesService {

  constructor() {
  }

  movies = Sample;

  getMovies() {
    return this.movies;
  }

  getMovie(id): Object {
    return this.movies[id]
  }
}
