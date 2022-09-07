import { ITmdbMovieData, ITmdbResponse } from '../../models/tmdb.model';
import { TmdbService } from '../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-content-section',
  templateUrl: './main-content-section.component.html',
  styleUrls: ['./main-content-section.component.scss']
})
export class MainContentSectionComponent implements OnInit {
  imgBackground!: string;
  movieTrending!: ITmdbMovieData;

  constructor(
    private tmdbService: TmdbService
  ) {
    this.tmdbService.getTrendingMovies().subscribe((data: ITmdbResponse) => {

      const moviesData: Array<ITmdbMovieData> = data.results;
      this.getOneRandomMovie(moviesData);
    })
  }

  ngOnInit(): void {

  }

  getOneRandomMovie(moviesData: Array<ITmdbMovieData>): void {
    this.movieTrending = moviesData[Math.floor(Math.random() * 19)] as ITmdbMovieData;

    this.imgBackground = 'https://image.tmdb.org/t/p/original/' + this.movieTrending.backdrop_path;
  }

}
