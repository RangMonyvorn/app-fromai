import React from 'react';
import './App.css';

function AddToCart({ products, addToCart }) {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt="" />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default AddToCart;