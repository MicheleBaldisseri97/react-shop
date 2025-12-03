import type { Product } from './Product.ts';

export interface CartItem {
  product: Product;
  qty: number;
}
