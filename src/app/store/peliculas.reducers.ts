import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as actions from '../store/peliculas.actions';

export interface AppState {
  lates: any;
  populars: any;
  movie: any;
  search: { query: string; data: any };
}
const initialState: any = {
  lates: null,
  populars: null,
  search: { query: '', data: null },
  movie: null,
};

export const _movieReducer = createReducer(
  initialState,
  on(actions.loadLatestSuccess, (state, { latest }) => ({
    ...state,
    lates: latest,
  })),
  on(actions.loadPopularsSuccess, (state, { populars }) => ({
    ...state,
    populars: populars,
  })),
  on(actions.searchSucess, (state, { data, query }) => ({
    ...state,
    search: { query: query, data: data },
  })),
  on(actions.loadMovie, (state, { movie }) => ({ ...state, movie: movie }))
);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action);
}
