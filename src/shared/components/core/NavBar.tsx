import { NavLink } from 'react-router-dom';

const isActive = (obj: { isActive: boolean }) =>
  obj.isActive ? 'text-xl text-sky-400 font-bold' : 'text-xl text-white';

export const NavBar = () => {
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
          <button className="btn accent lg">Cart: 0</button>
        </div>

        {/*Login / CMS / Logout buttons*/}
        <div className="fixed bottom-2 right-2 text-white p-5 ">
          <NavLink to="login" className="btn accent lg">
            login
          </NavLink>
          <NavLink to="cms" className="btn accent lg">
            cms
          </NavLink>
          <button className="btn primary lg">logout</button>
        </div>
      </div>
    </div>
  );
};
