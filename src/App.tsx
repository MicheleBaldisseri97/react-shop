import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { NavBar, PrivateRoute } from './shared';
import {
  CartPage,
  CheckoutPage,
  CMSOrdersPage,
  CMSPage,
  CMSProductsPage,
  LoginPage,
  ShopPage,
  ThanksPage,
} from './pages';

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
          <Route path="login" element={<LoginPage />} />

          <Route
            path="cms"
            element={
              <PrivateRoute>
                <CMSPage />
              </PrivateRoute>
            }
          >
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
