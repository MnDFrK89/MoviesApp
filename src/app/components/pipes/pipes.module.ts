import { NgModule } from '@angular/core';
import { NoImagesPipe } from './no-images.pipe';
import { StylePipe } from './no-styles.pipe';

@NgModule({
  declarations: [NoImagesPipe, StylePipe],

  exports: [NoImagesPipe, StylePipe],
})
export class SharedModule {}
