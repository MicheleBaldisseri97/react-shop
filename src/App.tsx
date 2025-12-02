import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { ShopPage } from './pages/shop/ShopPage.tsx';
import { CartPage } from './pages/cart/CartPage.tsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.tsx';
import { ThanksPage } from './pages/checkout/ThanksPage.tsx';
import { LogintPage } from './pages/login/LoginPage.tsx';
import { CMSPage } from './pages/cms/CMSPage.tsx';
import { CMSProductsPage } from './pages/cms/products/CMSProductsPage.tsx';
import { CMSOrdersPage } from './pages/cms/orders/CMSOrdersPage.tsx';
import { NavBar } from './shared/components/core/NavBar.tsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thanks" element={<ThanksPage />} />
          <Route path="login" element={<LogintPage />} />

          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route path="" element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<Navigate to="shop" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
