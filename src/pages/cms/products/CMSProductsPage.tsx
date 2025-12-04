import { useProductsService } from '../../../services/products/useProductsService.ts';
import { useEffect } from 'react';
import { ServerError } from '../../../shared';
import { CMSProductsList } from './components/ProductsList.tsx';
import { CMSProductForm } from './components/CMSProductForm.tsx';

export function CMSProductsPage() {
  const { state, actions } = useProductsService();

  useEffect(() => {
    actions.getProducts();
  }, []);

  return (
    <div>
      <h1 className="title">CMS</h1>

      {state.pending && <div>loading...</div>}
      {state.error && <ServerError message={state.error} />}

      <CMSProductForm
        activeItem={state.activeItem}
        onClose={actions.resetActiveItem}
        onAdd={actions.addProduct}
        onEdit={actions.editProduct}
      />

      <CMSProductsList
        items={state.products}
        activeItem={state.activeItem}
        onEditItem={actions.setActiveItem}
        onDeleteItem={actions.deleteProduct}
      />

      <button className="btn primary" onClick={() => actions.setActiveItem({})}>
        ADD NEW
      </button>
    </div>
  );
}
