import { ITmdbMovieData, ITmdbResponse } from './../../models/tmdb.model';
import { TmdbService } from './../../services/tmdb.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { InfoMovieModalComponent } from '../../shared/components/info-movie-modal/info-movie-modal.component';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovies!: Array<ITmdbMovieData>;
  modalRef: MdbModalRef<InfoMovieModalComponent> | null = null;

  constructor(
    private tmdbService: TmdbService,
    private modalService: MdbModalService
  ) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data: ITmdbResponse) => {
      const popularMovies: Array<ITmdbMovieData> = data.results;
      this._getSomePopularMovies(popularMovies);
    })
  }

  openModal(movieSelect: any) {
    this.modalRef = this.modalService.open(InfoMovieModalComponent, {
      modalClass: 'modal-dialog',
      data: movieSelect
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
