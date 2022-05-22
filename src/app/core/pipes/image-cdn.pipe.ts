import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'ImageCdn',
})
export class ImageCdnPipe implements PipeTransform {
  transform(url: string | undefined) {
    return url ? environment.host + '/assets/img/' + url : url;
  }
}
