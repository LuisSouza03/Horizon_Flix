import { ITmdbMovieTrailerData, ITmdbResponseTrailerMovie } from './../../../models/tmdb.model';
import { Component, Input, OnInit } from '@angular/core';
import { ITmdbMovieData } from 'src/app/models/tmdb.model';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-info-movie-modal',
  templateUrl: './info-movie-modal.component.html',
  styleUrls: ['./info-movie-modal.component.scss']
})
export class InfoMovieModalComponent implements OnInit {

  @Input() movieSelect!: Array<ITmdbMovieData> | any;
  movieTrailerLink!: string;

  constructor(
    public modal: NgbActiveModal,
    private tmdbService: TmdbService
  ) { }


  async ngOnInit(): Promise<void> {
    console.log(this.movieSelect);
    await this.getMovieTrailer()
    debugger
  }

  async getMovieTrailer() {
    this.tmdbService.getMovieTrailer(this.movieSelect.id).subscribe((data: ITmdbResponseTrailerMovie) => {
      const originalsMovies: Array<ITmdbMovieTrailerData> = data.results;

      if (originalsMovies[0].site === 'YouTube') {
        this.movieTrailerLink = `https://www.youtube.com/embed/${originalsMovies[0].key}?autoplay=1`
      }
    })
  }

}
