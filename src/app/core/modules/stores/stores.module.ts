import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeEffect } from 'src/app/modules/home/store/home.effect';
import * as homeStore from 'src/app/modules/home/store/home.reducer';

import { CAR_FEATURE_KEY } from '../../constants/home.constant';

@NgModule({
  imports: [
    EffectsModule.forFeature([HomeEffect]),
    StoreModule.forFeature(CAR_FEATURE_KEY, homeStore.reducer),
  ],
})
export class StoresModule {}
