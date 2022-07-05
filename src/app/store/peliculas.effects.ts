import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { MovieService } from '../services/movie.service';
import * as actions from '../store/peliculas.actions';

@Injectable()
export class PeliculaEffects {
  loadLatest$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.loadLatest),
      exhaustMap(() =>
        this.movService
          .getLatestReleases()
          .pipe(map((res) => actions.loadLatestSuccess({ latest: res })))
      )
    )
  );
  loadPopulars$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.loadPopulars),
      exhaustMap(() =>
        this.movService
          .getPopulars()
          .pipe(map((res) => actions.loadPopularsSuccess({ populars: res })))
      )
    )
  );
  search$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.search),
      exhaustMap((data) =>
        this.movService.searchMovie(data.search).pipe(
          map((res) => {
            console.log(res);
            return actions.searchSucess({ query: data.search, data: res });
          })
        )
      )
    )
  );
  constructor(private action$: Actions, private movService: MovieService) {}
}
