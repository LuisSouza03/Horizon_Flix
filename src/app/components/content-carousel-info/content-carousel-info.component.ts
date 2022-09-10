import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-carousel-info',
  templateUrl: './content-carousel-info.component.html',
  styleUrls: ['./content-carousel-info.component.scss']
})
export class ContentCarouselInfoComponent implements OnInit {

  titleSection: string = 'Em Alta';

  constructor() { }

  ngOnInit(): void {
  }

}
