import { Component, Input } from '@angular/core';
import { CarData } from 'src/app/modules/home/store/home.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent {

  @Input() carData: CarData | null = null;

}
