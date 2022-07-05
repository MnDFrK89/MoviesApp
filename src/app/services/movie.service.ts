import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apikey = 'c8dd82685fad91592a15c17c2f577b70';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  public getPopulars(): Observable<any> {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((res) => (<any>res).results));
  }

  public searchMovie(texto: string): Observable<any> {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map((res) => (<any>res).results));
  }

  public getLatestReleases(): Observable<any> {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&sort_by=release_date.desc&primary_release_year=2022&language=es`;
    return this.http.get(url).pipe(map((res) => (<any>res).results));
  }
}
