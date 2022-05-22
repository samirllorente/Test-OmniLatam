import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailRoutingModule } from './car-detail-routing.module';
import { CarDetailComponent } from './car-detail.component';
import { ViewComponent } from './components/view/view.component';
import { GlobalPipesModule } from 'src/app/core/pipes/global-pipes.module';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CarDetailComponent, ViewComponent],
  imports: [
    CommonModule,
    CarDetailRoutingModule,
    GlobalPipesModule,
    MatCardModule,
  ],
})
export class CarDetailModule {}
