import { createAction, props } from '@ngrx/store';
import {
  ACTION_GET_CAR_LIST,
  ACTION_GET_CAR_LIST_FAIL,
  ACTION_GET_CAR_LIST_SUCESS,
} from 'src/app/core/constants/home.constant';
import { CarData } from './home.model';

export const GET_CAR_LIST = createAction(ACTION_GET_CAR_LIST);
export const GET_CAR_LIST_FAIL = createAction(ACTION_GET_CAR_LIST_FAIL);
export const GET_CAR_LIST_SUCCESS = createAction(
  ACTION_GET_CAR_LIST_SUCESS,
  props<{ cars: Array<CarData> }>()
);
