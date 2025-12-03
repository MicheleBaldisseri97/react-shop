import type { Product } from '../../model/Product.ts';
import { useEffect, useState } from 'react';
import { pb } from '../../pocketbase.ts';
import { ProductCard } from './ProductCard.tsx';
import { ServerError } from '../../shared';

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    pb.collection('products')
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setPending(false));
  }, []);

  function addToCart(p: Partial<Product>) {
    console.log(p);
  }

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {error && <ServerError />}
      {pending && <div>loading...</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((p) => {
          return (
            <div key={p.id}>
              <ProductCard product={p} onAddToCart={() => addToCart(p)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
