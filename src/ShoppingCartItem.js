import React from 'react';

const ShoppingCartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {
  const handleInputChange = (e) => {
    const quantity = parseInt(e.target.value, 10) || 0;
    onIncreaseQuantity(item.id, quantity);
  };

  const handleRemoveClick = () => {
    onRemoveItem(item.id);
  };

  return (
    <div className="shopping-cart-item">
      <img className="product-image" src={item.image} alt={item.name} />
      <div className="shopping-cart-item-details">
        <h3 className="shopping-cart-item-name">{item.name}</h3>
        <p className="shopping-cart-item-description">{item.description}</p>
        <div className="shopping-cart-item-controls">
          <input
            className="shopping-cart-item-quantity"
            type="text"
            name={`quantity${item.id}`}
            placeholder="Quantity"
            value={item.quantity}
            onChange={handleInputChange}
          />
          <button className="shopping-cart-item-increase" onClick={() => onIncreaseQuantity(item.id, 1)}>
            +
          </button>
          <button className="shopping-cart-item-decrease" onClick={() => onDecreaseQuantity(item.id, 1)} disabled={item.quantity === 1}>
            -
          </button>
          <button className="shopping-cart-item-remove" onClick={handleRemoveClick}>
            Remove
          </button>
        </div>
      </div>
      <p className="shopping-cart-item-price">Price: ${item.price * item.quantity}</p>
    </div>
  );
};

export default ShoppingCartItem;