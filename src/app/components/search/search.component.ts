import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getMovie,
  getSearchData,
  getSearchQuery,
} from 'src/app/store/peliculas.selectors';
import * as actions from '../../store/peliculas.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search$: Observable<any>;
  query$: Observable<any>;
  imagenUrl = 'http://image.tmdb.org/t/p/w200';
  constructor(private store: Store, private router: Router) {
    this.search$ = this.store.select(getSearchData);
    this.query$ = this.store.select(getSearchQuery);
  }

  ngOnInit(): void {}

  public find(evento: any) {
    const valor = evento.target.value;
    this.store.dispatch(actions.search({ search: valor }));
  }
  public loadMovie(id: string, movie: any) {
    this.store.dispatch(actions.loadMovie({ movie: movie }));
    this.store
      .select(getMovie)
      .subscribe((res) => localStorage.setItem('state', JSON.stringify(res)));
    this.router.navigateByUrl(`/movie/${id}`);
  }
}
