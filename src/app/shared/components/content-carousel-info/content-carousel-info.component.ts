import { Component, Input, OnInit } from '@angular/core';
import { ITmdbMovieData } from 'src/app/models/tmdb.model';

@Component({
  selector: 'app-content-carousel-info',
  templateUrl: './content-carousel-info.component.html',
  styleUrls: ['./content-carousel-info.component.scss']
})
export class ContentCarouselInfoComponent implements OnInit {

  @Input() titleSection: string = 'Em Alta';
  @Input() popularMovies!: Array<ITmdbMovieData>;

  constructor() { }

  ngOnInit(): void {
  }

}
