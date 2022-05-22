import { Action, createReducer, on } from '@ngrx/store';
import { CarData } from '../../home/store/home.model';
import { GET_CAR_BY_ID_FAIL, GET_CAR_BY_ID_SUCCESS } from './car-detail.action';


export const initialState: CarData = {
  id: 0,
  brand: '',
  carSpecifications: '',
  largerImage: '',
  model: '',
  photo: '',
  price: 0,
  year: 0,
};

export const homeReducer = createReducer(
  initialState,
  on(GET_CAR_BY_ID_SUCCESS, (state: CarData, { car }: any) => {
    return car;
  }),
  on(GET_CAR_BY_ID_FAIL, (state) => state)
);

export function reducer(state: CarData | undefined, action: Action) {
  return homeReducer(state, action);
}
