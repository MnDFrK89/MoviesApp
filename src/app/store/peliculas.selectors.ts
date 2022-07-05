import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './peliculas.reducers';

export const getState = createFeatureSelector<AppState>('app');
export const getLatest = createSelector(
  getState,
  (state: AppState) => state.lates
);
export const getPopulars = createSelector(
  getState,
  (state: AppState) => state.populars
);
export const getMovie = createSelector(
  getState,
  (state: AppState) => state.movie
);
export const getSearchData = createSelector(
  getState,
  (state: AppState) => state.search.data
);
export const getSearchQuery = createSelector(
  getState,
  (state: AppState) => state.search.query
);
