import { Component, Input, OnInit } from '@angular/core';
import { ITmdbMovieData } from 'src/app/models/tmdb.model';
import Swiper from 'swiper';
import { InfoMovieModalComponent } from 'src/app/shared/components/info-movie-modal/info-movie-modal.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() moviesSelect!: Array<ITmdbMovieData>;

  constructor(
    private modalService: NgbModal
  ) { }

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
