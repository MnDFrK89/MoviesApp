import { createAction, props } from '@ngrx/store';

export const loadPopulars = createAction('[Home] loadPopulars');
export const loadPopularsSuccess = createAction(
  '[Home] loadPopularsSucess',
  props<{ populars: any }>()
);
export const loadLatest = createAction('[Home] loadLatest');
export const loadLatestSuccess = createAction(
  '[Home] loadLatestSucess',
  props<{ latest: any }>()
);
export const search = createAction('[Search] Search', props<{ search: any }>());
export const searchSucess = createAction(
  '[Search] SearchSucess',
  props<{ data: any; query: string }>()
);
export const loadMovie = createAction(
  '[Movie] loadMovie',
  props<{ movie: any }>()
);
