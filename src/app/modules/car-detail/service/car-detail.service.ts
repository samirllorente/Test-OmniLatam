import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ENDPOINT_GET_CAR_LIST } from 'src/app/core/constants/home.constant';
import { CarData, CarDataResponse } from '../../home/store/home.model';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  constructor(private http: HttpClient) {}

  public getCaById(carId: number): Observable<CarData | undefined> {
    return this.http
      .get<CarDataResponse>(ENDPOINT_GET_CAR_LIST)
      .pipe(map((resp) => resp.data.find((car) => car.id === carId)));
  }
}
