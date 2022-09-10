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
  imgBackground!: string;

  constructor(
    public modal: NgbActiveModal,
    private tmdbService: TmdbService
  ) { }


  async ngOnInit(): Promise<void> {
    this.imgBackground = 'https://image.tmdb.org/t/p/original/' + this.movieSelect.backdrop_path;
    await this.getMovieTrailer()
    debugger
  }

  async getMovieTrailer() {
    this.tmdbService.getMovieTrailer(this.movieSelect.id).subscribe((data: ITmdbResponseTrailerMovie) => {

      const originalsMovies: Array<ITmdbMovieTrailerData> = data.results;
      const youtubeVideos = originalsMovies.filter((siteSearch: any) => siteSearch.site === 'YouTube');
      if (youtubeVideos) {

        const trailerMovie = youtubeVideos.find((x: any) => x.type === 'Trailer');
        this.movieTrailerLink = `https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1`
      }
    })
  }

}
