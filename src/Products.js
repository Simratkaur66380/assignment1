import React from 'react';

const Products = ({ products, onAddToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <div className="allproducts">
        <div className="product-container" key={product.id}>
          <div>
          <img className="product-image" src={product.image} alt={product.name} />
          </div>
          <div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <input className="quantity-input" type="text" name={`quantity${product.id}`} placeholder="Quantity" /> <br/><br/>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Products;