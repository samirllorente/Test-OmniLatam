import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarData } from '../../home/store/home.model';
import { GET_CAR_BY_ID } from './car-detail.action';
import { getCarDetailSelector } from './car-detail.selector';

@Injectable({
  providedIn: 'root',
})
export class CarDetailFacade {
  constructor(private store: Store<any>) {}

  public carDetail$: Observable<CarData> =
    this.store.select(getCarDetailSelector);

  public getCarByID(carId: number): void {
    this.store.dispatch(GET_CAR_BY_ID({ carId }));
  }
}
