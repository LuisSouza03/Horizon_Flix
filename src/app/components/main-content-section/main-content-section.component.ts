import { ITmdbMovieData, ITmdbResponse } from '../../models/tmdb.model';
import { TmdbService } from '../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { InfoMovieModalComponent } from 'src/app/shared/components/info-movie-modal/info-movie-modal.component';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-main-content-section',
  templateUrl: './main-content-section.component.html',
  styleUrls: ['./main-content-section.component.scss']
})
export class MainContentSectionComponent implements OnInit {
  imgBackground!: string;
  movieTrending!: ITmdbMovieData;
  currentRate!: number;

  isReadMore = true

  constructor(
    private tmdbService: TmdbService,
    private modalService: NgbModal,
    private configStars: NgbRatingConfig
  ) {
    configStars.readonly = true;

    this.tmdbService.getTrendingMovies().subscribe((data: ITmdbResponse) => {

      const moviesData: Array<ITmdbMovieData> = data.results;
      debugger
      this.getOneRandomMovie(moviesData);
    })
  }

  ngOnInit(): void {

  }

  getOneRandomMovie(moviesData: Array<ITmdbMovieData>): void {

    this.movieTrending = moviesData[Math.floor(Math.random() * 19)] as ITmdbMovieData;
    this.currentRate = this.movieTrending.vote_average as number;
    this.imgBackground = 'https://image.tmdb.org/t/p/original/' + this.movieTrending.backdrop_path;
  }

  openModal(movieSelect: any) {

    const modalRef = this.modalService.open(InfoMovieModalComponent);
    modalRef.componentInstance.movieSelect = movieSelect;
  }

  showText() {

    this.isReadMore = !this.isReadMore
  }

}
