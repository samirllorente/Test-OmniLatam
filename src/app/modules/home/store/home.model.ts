export interface CarData {
  id: number;
  photo: string;
  model: string;
  year: number;
  brand: string;
  price: number;
  carSpecifications: string;
  largerImage: string;
}

export interface CarDataResponse {
  data: Array<CarData>;
}
