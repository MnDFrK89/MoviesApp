import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { NoImagesPipe } from '../pipes/no-images.pipe';
import { SharedModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule, SharedModule],
})
export class MovieModule {}
