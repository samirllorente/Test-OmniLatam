import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';

import { GlobalPipesModule } from 'src/app/core/pipes/global-pipes.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [HomeComponent, CarCardComponent, CarFilterComponent, CarrouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GlobalPipesModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
  ],
})
export class HomeModule {}
