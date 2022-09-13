import { ITmdbMovieData, ITmdbResponse } from '../../models/tmdb.model';
import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-carousel-movies',
  templateUrl: './carousel-movies.component.html',
  styleUrls: ['./carousel-movies.component.scss']
})
export class CarouselMoviesComponent implements OnInit {

  titleSection = ['Em Alta', 'Originais HorizonFlix', 'Terror e Suspense', 'Ação e Aventura']

  popularMovies: Array<ITmdbMovieData>;
  originalsMovies: Array<ITmdbMovieData>;
  horrorMovies: Array<ITmdbMovieData>;
  actionMovies: Array<ITmdbMovieData>;

  constructor(
    private tmdbService: TmdbService,
  ) { }

  ngOnInit(): void {
    debugger
    this.getPopularMovies();
    this.getOriginalsMovies();
    this.getHorrorMovies();
    this.getActionAndAdventureMovies();
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
    let horrorMoviesData: any;
    let thrillerMoviesData: any;

    this.tmdbService.getMoviesForCategory('27').subscribe((data: ITmdbResponse) => {
      horrorMoviesData = data.results;

      this.horrorMovies = horrorMoviesData;
    })

    this.tmdbService.getMoviesForCategory('53').subscribe((data: ITmdbResponse) => {
      thrillerMoviesData = data.results;

      for (let i in horrorMoviesData) {
        thrillerMoviesData.push(horrorMoviesData[i]);
      }

      this.horrorMovies = thrillerMoviesData;

      for (let i in this.horrorMovies) {
        this.horrorMovies[i].poster_path = `https://image.tmdb.org/t/p/original/${this.horrorMovies[i].poster_path}`;
      }
    })
  }

  getActionAndAdventureMovies() {
    let actionMoviesData: any;
    let adventureMoviesData: any;

    this.tmdbService.getMoviesForCategory('28').subscribe((data: ITmdbResponse) => {
      actionMoviesData = data.results;

      this.actionMovies = actionMoviesData;
    })

    this.tmdbService.getMoviesForCategory('12').subscribe((data: ITmdbResponse) => {
      adventureMoviesData = data.results;

      for (let i in actionMoviesData) {
        adventureMoviesData.push(actionMoviesData[i])
      }

      this.actionMovies = adventureMoviesData;

      for (let i in this.actionMovies) {
        this.actionMovies[i].poster_path = `https://image.tmdb.org/t/p/original/${this.actionMovies[i].poster_path}`;
      }
    })
  }
}
