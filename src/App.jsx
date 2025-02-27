import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import AddToCart from "./AddToCart.jsx";
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
    setCart([...cart, product]);
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar cart={cart} handleClick={handleClick} />


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
      {showcart && <Cart cart={cart} handleClick={handleClick} />}
    </>
  );
}

const Cart = ({ cart, handleClick }) => (
  <div className="cart">
    {/* <button onClick={handleClick} className="close-cart">Close</button> */}
    <h1>Cart</h1>
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <div className="array-product">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    )}

    <div className="btns">
      <button className="close" onClick={handleClick}>
        Close
      </button>
      <button className="">PayMent</button>
    </div>
  </div>
);

export default App;
