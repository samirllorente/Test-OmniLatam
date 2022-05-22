import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CarDetailEffect } from 'src/app/modules/car-detail/store/car-detail.effect';
import { HomeEffect } from 'src/app/modules/home/store/home.effect';

import * as carDetailStore from 'src/app/modules/car-detail/store/car-detail.reducer';
import * as homeStore from 'src/app/modules/home/store/home.reducer';

import { CAR_FEATURE_KEY } from '../../constants/home.constant';
import { CAR_DETAIL_FEATURE_KEY } from '../../constants/car-detail.constant';

@NgModule({
  imports: [
    EffectsModule.forFeature([HomeEffect, CarDetailEffect]),
    StoreModule.forFeature(CAR_FEATURE_KEY, homeStore.reducer),
    StoreModule.forFeature(CAR_DETAIL_FEATURE_KEY, carDetailStore.reducer),
  ],
})
export class StoresModule {}
