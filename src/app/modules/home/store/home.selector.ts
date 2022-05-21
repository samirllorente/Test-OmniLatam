import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CAR_FEATURE_KEY } from 'src/app/core/constants/home.constant';
import { CarData } from './home.model';

export const getCarListState =
  createFeatureSelector<Array<CarData>>(CAR_FEATURE_KEY);

export const getCarListSelector = createSelector(
  getCarListState,
  (state: Array<CarData>) => state
);
