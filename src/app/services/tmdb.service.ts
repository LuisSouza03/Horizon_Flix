import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ITmdbResponse } from '../models/tmdb.model';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTrending(): Observable<ITmdbResponse> {
    return this.httpClient.get<ITmdbResponse>(`${environment.API_URL}/trending/all/day?language=pt-BR&api_key=${environment.API_KEY}`);
  }
}
