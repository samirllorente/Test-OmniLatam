import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import {
  GET_CAR_BY_ID,
  GET_CAR_BY_ID_FAIL,
  GET_CAR_BY_ID_SUCCESS,
} from './car-detail.action';
import { CarDetailService } from '../service/car-detail.service';
import { CarData } from '../../home/store/home.model';

@Injectable()
export class CarDetailEffect {
  constructor(
    private actions$: Actions,
    private carDetailService: CarDetailService
  ) {}

  public getCarById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_CAR_BY_ID),
      exhaustMap(({ carId }) =>
        this.carDetailService
          .getCaById(carId)
          .pipe(
            map(this.resolveGetCarByIdSuccess as any),
            catchError(this.resolveGetCarByIdFailure)
          )
      )
    )
  );

  private resolveGetCarByIdFailure = (): Observable<any> =>
    of(GET_CAR_BY_ID_FAIL());

  private resolveGetCarByIdSuccess = (car: CarData): any =>
    car ? GET_CAR_BY_ID_SUCCESS({ car }) : GET_CAR_BY_ID_FAIL();
}
