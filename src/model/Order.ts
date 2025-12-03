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
