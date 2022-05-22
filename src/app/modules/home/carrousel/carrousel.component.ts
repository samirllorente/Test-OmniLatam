import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.sass']
})
export class CarrouselComponent {

  @Input() images: Array<string> | null = null;

}
