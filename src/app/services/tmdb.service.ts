import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public Obtendotrending(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/trending/all/week?language=pt-BR&api_key=${environment.API_KEY}`)
  }
}
