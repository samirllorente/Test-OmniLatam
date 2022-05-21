import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ENDPOINT_GET_CAR_LIST } from 'src/app/core/constants/home.constant';
import { CarData, CarDataResponse } from '../store/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  public getCarList(): Observable<Array<CarData>> {
    return this.http
      .get<CarDataResponse>(ENDPOINT_GET_CAR_LIST)
      .pipe(map((resp) => resp.data));
  }
}
