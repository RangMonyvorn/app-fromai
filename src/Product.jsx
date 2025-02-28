import React from 'react';
import './App.css';

function AddToCart({ products, addToCart  }) {
  return (
  <div className='Classproduct'>
  <h4>All Product</h4>
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt="" />
          <div className="price">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default AddToCart;