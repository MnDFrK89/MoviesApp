import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'style',
})
export class StylePipe implements PipeTransform {
  transform(images: any[], i: number): string {
    if (images[i].poster_path == null) return 'max-width: 15rem;height:280px';
    else return 'max-width: 15rem;height:400px';
  }
}
