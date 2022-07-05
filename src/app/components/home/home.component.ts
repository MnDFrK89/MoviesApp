import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/peliculas.reducers';
import {
  getLatest,
  getMovie,
  getPopulars,
} from '../../store/peliculas.selectors';
import * as actions from '../../store/peliculas.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mostPopulars: Observable<any>;
  getLatestReleases: Observable<any>;
  imagenUrl = 'http://image.tmdb.org/t/p/w200';
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.dispatch(actions.loadLatest());
    this.store.dispatch(actions.loadPopulars());
    this.mostPopulars = this.store.select(getPopulars);
    this.getLatestReleases = this.store.select(getLatest);
  }
  public loadMovie(id: string, movie: any): void {
    this.store.dispatch(actions.loadMovie({ movie: movie }));
    this.store
      .select(getMovie)
      .subscribe((res) => localStorage.setItem('state', JSON.stringify(res)));
    this.router.navigateByUrl(`/movie/${id}`);
  }
  ngOnInit(): void {}
}
