import { ITmdbMovieData, ITmdbResponse } from '../../models/tmdb.model';
import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-movies',
  templateUrl: './carousel-movies.component.html',
  styleUrls: ['./carousel-movies.component.scss']
})
export class CarouselMoviesComponent implements OnInit {

  titleSection = ['Em Alta', 'Originais HorizonFlix', 'Terror']
  popularMovies!: Array<ITmdbMovieData>;
  originalsMovies!: Array<ITmdbMovieData>;
  horrorMovies!: Array<ITmdbMovieData>;

  constructor(
    private tmdbService: TmdbService,
  ) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getOriginalsMovies();
    this.getHorrorMovies();
  }

  getPopularMovies() {
    this.tmdbService.getPopularMovies().subscribe((data: ITmdbResponse) => {
      const popularMovies: Array<ITmdbMovieData> = data.results;

      this.popularMovies = popularMovies;

      for (let i in this.popularMovies) {
        this.popularMovies[i].poster_path = `https://image.tmdb.org/t/p/original/${this.popularMovies[i].poster_path}`;
      }
    })
  }

  getOriginalsMovies() {
    this.tmdbService.getOriginalsMovies().subscribe((data: ITmdbResponse) => {
      const originalsMovies: Array<ITmdbMovieData> = data.results;

      this.originalsMovies = originalsMovies;

      for (let i in this.originalsMovies) {
        this.originalsMovies[i].poster_path = `https://image.tmdb.org/t/p/original/${this.originalsMovies[i].poster_path}`;
      }
    })
  }

  getHorrorMovies() {
    this.tmdbService.getMoviesForCategory('27').subscribe((data: ITmdbResponse) => {
      const horrorMoviesData: Array<ITmdbMovieData> = data.results;

      this.horrorMovies = horrorMoviesData;

      for (let i in this.horrorMovies) {
        this.horrorMovies[i].poster_path = `https://image.tmdb.org/t/p/original/${this.horrorMovies[i].poster_path}`;
      }
    })
  }

}
