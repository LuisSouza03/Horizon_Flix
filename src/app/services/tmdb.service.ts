import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ITmdbResponse, ITmdbResponseTrailerMovie } from '../models/tmdb.model';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTrendingMovies(): Observable<ITmdbResponse> {
    return this.httpClient.get<ITmdbResponse>(`${environment.API_URL}/trending/all/day?language=pt-BR&api_key=${environment.API_KEY}`);
  }

  public getPopularMovies(): Observable<ITmdbResponse> {
    return this.httpClient.get<ITmdbResponse>(`${environment.API_URL}/movie/popular?language=pt-BR&api_key=${environment.API_KEY}`);
  }

  public getOriginalsMovies(): Observable<ITmdbResponse> {
    return this.httpClient.get<ITmdbResponse>(`${environment.API_URL}/movie/top_rated?language=pt-BR&api_key=${environment.API_KEY}`);
  }

  public getMovieTrailer(movieId: string): Observable<ITmdbResponseTrailerMovie> {
    return this.httpClient.get<ITmdbResponseTrailerMovie>(`${environment.API_URL}/movie/${movieId}/videos?language=en-US&api_key=${environment.API_KEY}`);
  }
}
