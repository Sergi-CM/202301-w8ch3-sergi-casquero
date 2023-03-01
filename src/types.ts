export interface UserStructure {
  id: number;
  username: string;
  email: string;
  isLogged: boolean;
  shippingDetails: string;
  token: string;
}

export type UsersStructure = UserStructure[];

export interface CarStructure {
  id: number;
  model: string;
  brand: string;
  stock: number;
  price: number;
}

export type CarsStructure = CarStructure[];
