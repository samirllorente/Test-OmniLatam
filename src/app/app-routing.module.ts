import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((Mod) => Mod.HomeModule),
  },
  {
    path: 'car/:id_car/detail',
    loadChildren: () =>
      import('./modules/car-detail/car-detail.module').then(
        (Mod) => Mod.CarDetailModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
