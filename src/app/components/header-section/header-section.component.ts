import { TmdbService } from './../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  imgBackground!: string;
  movieTrending!: any;

  trendingTopics!: any;
  sanitizer: any;

  constructor(
    private tmdbService: TmdbService
  ) {
    this.tmdbService.Obtendotrending().subscribe((data: any) => {

      const moviesData = data.results;
      this.getDataOnlyOneMovie(moviesData);
    })
  }

  ngOnInit(): void {

  }

  getDataOnlyOneMovie(moviesData: Array<any>): void {

    this.movieTrending = moviesData[Math.floor(Math.random() * 19)];
    debugger
    this.imgBackground = 'https://image.tmdb.org/t/p/original/' + this.movieTrending.backdrop_path;
  }

}
