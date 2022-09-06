import { ITmdbMovieDataTrending, ITmdbResponse } from './../../models/tmdb.model';
import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  imgBackground!: string;
  movieTrending!: ITmdbMovieDataTrending;

  constructor(
    private tmdbService: TmdbService
  ) {
    this.tmdbService.getTrending().subscribe((data: ITmdbResponse) => {

      const moviesData: Array<ITmdbMovieDataTrending> = data.results;
      this.getOneRandomMovie(moviesData);
    })
  }

  ngOnInit(): void {

  }

  getOneRandomMovie(moviesData: Array<ITmdbMovieDataTrending>): void {
    this.movieTrending = moviesData[Math.floor(Math.random() * 19)] as ITmdbMovieDataTrending;
    debugger
    this.imgBackground = 'https://image.tmdb.org/t/p/original/' + this.movieTrending.backdrop_path;
  }

}
