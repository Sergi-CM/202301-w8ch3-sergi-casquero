export interface UserStructure {
  id: number;
  username: string;
  email: string;
  isLogged: boolean;
  shippingDetails: string;
  token: string;
}

export type UsersStructure = UserStructure[];
