import { Outlet, NavLink } from "react-router-dom";

function MainLayout(){
  return (
    <div>
      <nav className="bg-gray-900 text-white p-3">
        <NavLink to="/" className="mr-3">Home</NavLink>
        <NavLink to="/shop/products" className="mr-3">Products</NavLink>
        <NavLink to="/shop/cart" className="mr-3">Cart</NavLink>
        <NavLink to="/shop/about">About</NavLink>
      </nav>
      <main className="p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;