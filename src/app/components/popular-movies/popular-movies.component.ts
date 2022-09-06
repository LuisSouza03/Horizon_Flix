import { ITmdbMovieData, ITmdbResponse } from './../../models/tmdb.model';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovies!: Array<ITmdbMovieData>;

  constructor(
    private tmdbService: TmdbService
  ) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data: ITmdbResponse) => {
      const popularMovies: Array<ITmdbMovieData> = data.results;
      this._getSomePopularMovies(popularMovies);
    })
  }

  private _getSomePopularMovies(data: Array<ITmdbMovieData>) {
    this.popularMovies = data.slice(5, 10)
    for (let i in this.popularMovies) {
      this.popularMovies[i].backdrop_path = `https://image.tmdb.org/t/p/original/${this.popularMovies[i].backdrop_path}`;
    }
    debugger
  }

}
