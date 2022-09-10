import { TmdbService } from './../../services/tmdb.service';
import { Component, Input, OnInit } from '@angular/core';
import { ITmdbMovieData, ITmdbResponse } from 'src/app/models/tmdb.model';
import Swiper from 'swiper';
import { InfoMovieModalComponent } from 'src/app/shared/components/info-movie-modal/info-movie-modal.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() popularMovies!: Array<ITmdbMovieData>;

  constructor(
    private tmdbService: TmdbService,
    private modalService: NgbModal
  ) {
    this.tmdbService.getPopularMovies().subscribe((data: ITmdbResponse) => {
      const popularMovies: Array<ITmdbMovieData> = data.results;
      this._getSomePopularMovies(popularMovies);
    })
  }

  private _getSomePopularMovies(data: Array<ITmdbMovieData>) {
    this.popularMovies = data
    for (let i in this.popularMovies) {
      this.popularMovies[i].poster_path = `https://image.tmdb.org/t/p/original/${this.popularMovies[i].poster_path}`;
    }
    debugger
  }


  ngOnInit(): void {

    const swiper = new Swiper('.swiper-container', {
      spaceBetween: 1,
      loop: true,
      slidesPerView: 6,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5.2,
          spaceBetween: 40
        },
        1800: {
          slidesPerView: 7,
          spaceBetween: 10
        }
      }
    });
  }

  openModal(movieSelect: any) {
    const modalRef = this.modalService.open(InfoMovieModalComponent);
    modalRef.componentInstance.movieSelect = movieSelect;
  }



}
