import { NavLink, useNavigate } from 'react-router-dom';
import { CartPanel } from './CartPanel.tsx';
import {
  selectCartIsEmpty,
  selectTotalCartItems,
  useCart,
  useCartPanel,
} from '../../../services/cart';
import { selectAuthIsLogged, useAuth } from '../../../services/auth';

const isActive = (obj: { isActive: boolean }) =>
  obj.isActive ? 'text-xl text-sky-400 font-bold' : 'text-xl text-white';

export const NavBar = () => {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);
  const isCartPanelOpened = useCartPanel((state) => state.open);
  const toggleCartPanel = useCartPanel((state) => state.toggle);
  const totalCartItems = useCart(selectTotalCartItems);
  const isEmpty = useCart(selectCartIsEmpty);
  const isLogged = useAuth(selectAuthIsLogged);

  function logoutHandler() {
    logout();
    navigate('/login');
  }

  return (
    <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
      <div className="bg-slate-900 flex justify-between items-center h-20 text-white">
        <div>
          <NavLink to="shop" className={isActive}>
            Shop
          </NavLink>
        </div>

        {/*Cart Button Badge */}
        <div>
          <button disabled={isEmpty} className="btn accent lg" onClick={toggleCartPanel}>
            Cart: {totalCartItems}
          </button>
        </div>

        {isCartPanelOpened && <CartPanel />}

        {/*Login / CMS / Logout buttons*/}
        <div className="fixed bottom-2 right-2 text-white p-5 ">
          <NavLink to="cms" className="btn accent lg">
            cms
          </NavLink>
          {isLogged ? (
            <button className="btn primary lg" onClick={logoutHandler}>
              logout
            </button>
          ) : (
            <NavLink to="login" className="btn accent lg">
              login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
