import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import AddToCart from "./Product.jsx";
import Home from "./Home";
// import Contact from './Contact';
import Services from "./Services";
import data from "./data.json";

function App() {
  const [cart, setCart] = useState([]);
  const [showcart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(!showcart);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const increaseqty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseqty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const calculateTotalprice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.qty, 0);
  };






  return (
    <>
      <Router>
        <div className="App">
          <Navbar cart={cart} handleClick={handleClick} cartcount={calculateTotalQuantity()} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <AddToCart products={data.products} addToCart={addToCart} />
              }
            />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>



      {/* Show cart only when showcart is true */}
      {showcart && (
        <Cart
          cart={cart}
          handleClick={handleClick}
          increaseqty={increaseqty}
          decreaseqty={decreaseqty}
          calculateTotalprice={calculateTotalprice}
        />
      )}


    </>
  );
}



const Cart = ({ cart, handleClick, increaseqty, decreaseqty, calculateTotalprice }) => (
  <div className="cart">
    <h1>Cart</h1>
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <div className="array-product">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="quantity">
              <span onClick={() => increaseqty(product.id)}>+</span>
              <p>{product.qty}</p>
              <span onClick={() => decreaseqty(product.id)}>-</span>
            </div>
          </div>
        ))}
      </div>
    )}
    <h4>Total: ${calculateTotalprice()}</h4>
    <div className="btns">
      <button className="close" onClick={handleClick}>
        Close
      </button>
      <button className="">Payment</button>
    </div>
  </div>
);

export default App;
