import { createAction, props } from '@ngrx/store';
import {
  ACTION_GET_CAR_BY_ID,
  ACTION_GET_CAR_BY_ID_FAIL,
  ACTION_GET_CAR_BY_ID_SUCESS,
} from 'src/app/core/constants/car-detail.constant';
import { CarData } from '../../home/store/home.model';

export const GET_CAR_BY_ID = createAction(
  ACTION_GET_CAR_BY_ID,
  props<{ carId: number }>()
);
export const GET_CAR_BY_ID_FAIL = createAction(ACTION_GET_CAR_BY_ID_FAIL);
export const GET_CAR_BY_ID_SUCCESS = createAction(
  ACTION_GET_CAR_BY_ID_SUCESS,
  props<{ car: CarData }>()
);
