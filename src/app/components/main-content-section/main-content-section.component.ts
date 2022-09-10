import { ITmdbMovieData, ITmdbResponse } from '../../models/tmdb.model';
import { TmdbService } from '../../services/tmdb.service';
import { Component, OnInit } from '@angular/core';
import { InfoMovieModalComponent } from 'src/app/shared/components/info-movie-modal/info-movie-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-main-content-section',
  templateUrl: './main-content-section.component.html',
  styleUrls: ['./main-content-section.component.scss']
})
export class MainContentSectionComponent implements OnInit {
  imgBackground!: string;
  movieTrending!: ITmdbMovieData;

  isReadMore = true

  constructor(
    private tmdbService: TmdbService,
    private modalService: NgbModal
  ) {
    this.tmdbService.getTrendingMovies().subscribe((data: ITmdbResponse) => {

      const moviesData: Array<ITmdbMovieData> = data.results;
      this.getOneRandomMovie(moviesData);
    })
  }

  ngOnInit(): void {

  }

  getOneRandomMovie(moviesData: Array<ITmdbMovieData>): void {
    debugger
    this.movieTrending = moviesData[Math.floor(Math.random() * 19)] as ITmdbMovieData;

    this.imgBackground = 'https://image.tmdb.org/t/p/original/' + this.movieTrending.backdrop_path;
  }

  openModal(movieSelect: any) {
    debugger
    const modalRef = this.modalService.open(InfoMovieModalComponent);
    modalRef.componentInstance.movieSelect = movieSelect;
  }

  showText() {
    this.isReadMore = !this.isReadMore
  }

}
