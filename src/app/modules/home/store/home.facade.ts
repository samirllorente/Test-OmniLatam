import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GET_CAR_LIST } from './home.action';
import { CarData } from './home.model';
import { getCarListSelector } from './home.selector';

@Injectable({
    providedIn: 'root'
})
export class HomeFacade {
  constructor(private store: Store<any>) {}

  public carList$: Observable<Array<CarData>> =
    this.store.select(getCarListSelector);

  public getCarList(): void {
    this.store.dispatch(GET_CAR_LIST());
  }
}
