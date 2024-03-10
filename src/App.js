import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import Account from './Account';
import Footer from './Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const products = [
    { id: 1, name: 'Lamp', image: 'images/lamp.jpg', description: 'sjfhbksjnflksjlfkjslkfhsdfjkhsdk', price: '10' },
    { id: 2, name: 'Camera', image: 'images/camera.jpg', description: 'sjfhbksjnflksjlfkjslkfhsdfjkhsdk', price: '12' },
    { id: 3, name: 'Watch', image: 'images/watch.jpg', description: 'sjfhbksjnflksjlfkjslkfhsdfjkhsdk', price: '20' },
    { id: 4, name: 'Music System', image: 'images/product1.jpg', description: 'sjfhbksjnflksjlfkjslkfhsdfjkhsdk', price: '20' },
    { id: 5, name: 'Watch', image: 'images/product5.jpg', description: 'sjfhbksjnflksjlfkjslkfhsdfjkhsdk', price: '20' },
  ];

  const handleFinalizeSale = () => {
    alert("Your Order has been placed");
    setCartItems([]);
    setIsCartEmpty(true);
  };

    const onIncreaseQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const onDecreaseQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - quantity, 1) }
          : item
      )
    );
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
  });


  const onSave = (updatedUser) => {
    setUser(updatedUser);
  };
  const onRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    const quantityInput = document.querySelector(`input[name=quantity${product.id}]`);
    const quantity = parseInt(quantityInput.value, 10);

    if (!isNaN(quantity) && quantity > 0) {
      setCartItems((prevItems) => {
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            //here i have added quantity
          );
        } else {
          return [...prevItems, { ...product, quantity }];
        }
      });
      alert('Product added to cart');
      setIsCartEmpty(false);
      quantityInput.value = '';
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products products={products} onAddToCart={handleAddToCart} />;
      case 'cart':
        return (
          isCartEmpty ? (
            <h2>Your cart is empty.</h2>
          ) : 
        
        <ShoppingCart cartItems={cartItems}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onRemoveItem={onRemoveItem}
          onFinalizeSale={handleFinalizeSale} />);
      case 'account':
        return <Account onSave={onSave} user={user} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} cartItems={cartItems} user={user} />
      {renderPage()}
      <Footer />
    </div>  
  );
};

export default App;