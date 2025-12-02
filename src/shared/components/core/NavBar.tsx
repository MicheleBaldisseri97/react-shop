import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <NavLink to="shop">Shop</NavLink>
      <NavLink to="cms">CMS</NavLink>
      <hr />
    </>
  );
};
