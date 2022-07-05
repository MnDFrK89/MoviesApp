import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from './store/peliculas.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TareaApp';

  constructor(private store: Store, private router: Router) {}

  public find(valor: any) {
    this.store.dispatch(actions.search({ search: valor }));
    this.router.navigateByUrl('/search');
  }
}
