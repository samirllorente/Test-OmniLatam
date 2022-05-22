import { Component, Input } from '@angular/core';
import { CarData } from '../../store/home.model';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.sass']
})
export class CarCardComponent {

  @Input() cardData: CarData | undefined;

}
