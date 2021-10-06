import { Product } from './Product';
import { v4 as uuidv4 } from 'uuid';

export class User {
  id: string;
  name: string;
  password: string;
  favorites: Product[];
  cart: Product[];

  constructor(name: string, password: string) {
    this.id = uuidv4();
    this.name = name;
    this.password = password;
    this.favorites = [];
    this.cart = [];
  }
}
