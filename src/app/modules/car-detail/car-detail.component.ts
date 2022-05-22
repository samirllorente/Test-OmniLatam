import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarData } from '../home/store/home.model';
import { CarDetailFacade } from './store/car-detail.facade';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.sass'],
})
export class CarDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private carDetailFacade: CarDetailFacade) {}

  ngOnInit(): void {
    this.getCarData();
  }

  private getCarData(): void {
    const carId = this.route.snapshot.paramMap.get('id_car');
    this.carDetailFacade.getCarByID(parseInt(carId!, 10));
  }

  get carData$(): Observable<CarData> {
    return this.carDetailFacade.carDetail$;
  }

}
