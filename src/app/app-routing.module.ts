import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('../app/components/movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('../app/components/search/search.module').then(
        (m) => m.SearchModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
