import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages',
})
export class NoImagesPipe implements PipeTransform {
  transform(images: any[] | any, url: string, i?: number): string {
    if (i != undefined) {
      if (images[i].poster_path == null) return 'assets/noImages.png';
      if (images.length > 0) return url + images[i].poster_path;
      else {
        return 'assets/noImages.png';
      }
    } else {
      if (images.poster_path == null) return 'assets/noImages.png';
      else return url + images.poster_path;
    }
  }
}
