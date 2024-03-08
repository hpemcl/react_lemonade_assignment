import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from "../context/shop-context";
import logo from '../assets/billeder/logo.png';
import './navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/adminPage">Log ind</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
