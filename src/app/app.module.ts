import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { movieReducer } from './store/peliculas.reducers';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { PeliculaEffects } from './store/peliculas.effects';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ app: movieReducer }),
    EffectsModule.forRoot([PeliculaEffects]),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
