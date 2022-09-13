import { ITmdbMovieData, ITmdbResponse } from './../../models/tmdb.model';
import { TmdbService } from './../../services/tmdb.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { InfoMovieModalComponent } from '../../shared/components/info-movie-modal/info-movie-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovies!: Array<ITmdbMovieData>;

  constructor(
    private tmdbService: TmdbService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data: ITmdbResponse) => {
      const popularMovies: Array<ITmdbMovieData> = data.results;
      this._getSomePopularMovies(popularMovies);
    })
  }

  openModal(movieSelect: any) {
    const modalRef = this.modalService.open(InfoMovieModalComponent);
    modalRef.componentInstance.movieSelect = movieSelect;
  }

  private _getSomePopularMovies(data: Array<ITmdbMovieData>) {
    this.popularMovies = data.slice(5, 15)
    for (let i in this.popularMovies) {
      this.popularMovies[i].backdrop_path = `https://image.tmdb.org/t/p/original/${this.popularMovies[i].backdrop_path}`;
    }
  }

}
