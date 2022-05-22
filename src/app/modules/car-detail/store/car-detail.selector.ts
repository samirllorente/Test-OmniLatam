import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CAR_DETAIL_FEATURE_KEY } from 'src/app/core/constants/car-detail.constant';
import { CarData } from '../../home/store/home.model';

export const getCarDetailState = createFeatureSelector<CarData>(
  CAR_DETAIL_FEATURE_KEY
);

export const getCarDetailSelector = createSelector(
  getCarDetailState,
  (state: CarData) => state
);
