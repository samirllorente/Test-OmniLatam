import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { urlBuilder } from 'src/app/core/helpers/url-builder.helpers';
import { HomeFacade } from './store/home.facade';
import { CarData } from './store/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  filter: string = '';

  constructor(private homeFacade: HomeFacade) {}

  ngOnInit(): void {
    this.homeFacade.getCarList();
  }

  filterByBrand(filter: string): void {
    this.filter = filter;
  }

  get carList$(): Observable<Array<CarData>> {
    return this.homeFacade.carList$.pipe(
      map((cars) =>
        cars.filter((car: CarData) =>
          car.brand.toLowerCase().includes(this.filter.toLowerCase())
        )
      )
    );
  }

  get images$(): Observable<Array<string>> {
    return this.homeFacade.carList$.pipe(
      map((cars) => cars.map((car) => urlBuilder(car.largerImage)))
    );
  }
}
