import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MainContentSectionComponent } from './components/main-content-section/main-content-section.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { InfoMovieModalComponent } from './shared/components/info-movie-modal/info-movie-modal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContentCarouselInfoComponent } from './components/content-carousel-info/content-carousel-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentSectionComponent,
    PopularMoviesComponent,
    InfoMovieModalComponent,
    CarouselComponent,
    ContentCarouselInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MdbCheckboxModule,
    MdbModalModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
