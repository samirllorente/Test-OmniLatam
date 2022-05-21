import { Action, createReducer, on } from '@ngrx/store';
import { GET_CAR_LIST_FAIL, GET_CAR_LIST_SUCCESS } from './home.action';
import { CarData } from './home.model';

export const initialState: Array<CarData> = [];

export const homeReducer = createReducer(
  initialState,
  on(GET_CAR_LIST_SUCCESS, (state: Array<CarData>, { cars }: any) => {
    return cars;
  }),
  on(GET_CAR_LIST_FAIL, (state) => state)
);

export function reducer(state: Array<CarData> | undefined, action: Action) {
  return homeReducer(state, action);
}
