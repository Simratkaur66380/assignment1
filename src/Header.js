// Header.js
import React from 'react';
import './App.css';


const Header = ({ setCurrentPage }) => {
    const handleClick = (page, event) => {
        event.preventDefault();
        setCurrentPage(page);
      };

  return (
    <nav>
          <a href="/" onClick={(e) => handleClick('home',e)}>
            Home
          </a>
          <a href="/" onClick={(e) => handleClick('products',e)}>
            Products
          </a>
  
          <a href="/cart" onClick={(e) => handleClick('cart',e)}>
            Shopping Cart
          </a>
   
          <a href="/account" onClick={(e) => handleClick('account',e)}>
            Account
          </a>
    </nav>
  );
};



export default Header;
