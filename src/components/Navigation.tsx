import { NavLink } from "react-router-dom";

export default function Navigation(){
    return(
    <nav className="bg-gray-900 text-white p-3">
        <NavLink  to="/" className={({ isActive }) =>`cursor-pointer mr-3 ${isActive ? "text-orange-300" : ""}`}>Home</NavLink>
        <NavLink to="/shop/products" className={({ isActive }) =>`cursor-pointer mr-3 ${isActive ? "text-orange-300" : ""}`}>Products</NavLink>
        <NavLink to="/shop/cart" className={({ isActive }) =>`cursor-pointer mr-3 ${isActive ? "text-orange-300" : ""}`}>Cart</NavLink>
        <NavLink to="/about" className={({ isActive }) =>`cursor-pointer mr-3 ${isActive ? "text-orange-300" : ""}`}>About</NavLink>
      </nav>
    )
}