import type { CartItem } from './CartItem.ts';

export type OrderStatus = 'pending' | 'done';

export interface OrderUser {
  name: string;
  email: string;
}

export interface OrderForm {
  user: OrderUser;
  order: CartItem[];
  status: OrderStatus;
  total: number;
}
export interface Order {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  order: CartItem[];
  status: OrderStatus;
  total: number;
  updated: string;
  user: OrderUser;
}
