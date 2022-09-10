import { Component, Input, OnInit } from '@angular/core';
import { ITmdbMovieData } from 'src/app/models/tmdb.model';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-movie-modal',
  templateUrl: './info-movie-modal.component.html',
  styleUrls: ['./info-movie-modal.component.scss']
})
export class InfoMovieModalComponent implements OnInit {

  @Input() movieSelect!: Array<ITmdbMovieData> | any;

  constructor(
    public activeModal: NgbActiveModal
  ) { }


  ngOnInit(): void {
  }

}
