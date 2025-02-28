import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function Navbar({handleClick , cartcount}) {
  return (
    <div className="navbar">
      <h1>VGET</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>
      <div onClick={handleClick} className="cart-button">
          <span>🛒</span>
          <span>{cartcount}</span>
      </div>
    </div>
  );
}

export default Navbar;
