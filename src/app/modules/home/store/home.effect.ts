import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import {
  GET_CAR_LIST,
  GET_CAR_LIST_FAIL,
  GET_CAR_LIST_SUCCESS,
} from './home.action';
import { CarData } from './home.model';
import { HomeService } from '../service/home.service';

@Injectable()
export class HomeEffect {
  constructor(private actions$: Actions, private homeService: HomeService) {}

  public getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_CAR_LIST),
      exhaustMap(() =>
        this.homeService
          .getCarList()
          .pipe(
            map(this.resolveGetCarListSuccess as any),
            catchError(this.resolveGetCarListFailure)
          )
      )
    )
  );

  private resolveGetCarListFailure = (): Observable<any> =>
    of(GET_CAR_LIST_FAIL());

  private resolveGetCarListSuccess = (cars: Array<CarData>): any =>
    cars ? GET_CAR_LIST_SUCCESS({ cars }) : GET_CAR_LIST_FAIL();
}
