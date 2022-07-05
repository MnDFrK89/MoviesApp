import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie$: Observable<any>;
  imagenUrl = 'http://image.tmdb.org/t/p/w200';
  constructor() {
    this.movie$ = of(JSON.parse(localStorage.getItem('state') || '{}'));
  }

  ngOnInit(): void {}
}
