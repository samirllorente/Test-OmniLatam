import { NgModule } from '@angular/core';
import { ImageCdnPipe } from './image-cdn.pipe';

@NgModule({
  declarations: [ImageCdnPipe],
  exports: [ImageCdnPipe],
  providers: [ImageCdnPipe],
})
export class GlobalPipesModule {}
