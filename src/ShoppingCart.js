import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem, onFinalizeSale }) => {
  return (
    <div className="allproducts">
      {cartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}


<br/><br/><button  onClick={onFinalizeSale}>
        Finalize Sale
      </button>
    </div>
  );
};

export default ShoppingCart;


// // Get API for fetching shopping cart items
// const express = require('express');
// const mysql = require('mysql2');

// const app = express();

// app.use(express.json()); // Middleware to parse JSON request bodies

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '', // Change this to your MySQL password
//   database: 'assignment2'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Create Product table if not exists
// connection.query(`
//   CREATE TABLE IF NOT EXISTS Product (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     Description VARCHAR(255),
//     image VARCHAR(255),
//     pricing DECIMAL(10,2),
//     shipping_cost DECIMAL(10,2)
//   )
// `);

// // Create ShoppingCartItem table if not exists
// connection.query(`
//   CREATE TABLE IF NOT EXISTS ShoppingCartItem (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     productId INT,
//     quantity INT,
//     FOREIGN KEY (productId) REFERENCES Product(id)
//   )
// `);

// // Get API for fetching shopping cart items
// app.get('/cartItems', (req, res) => {
//   connection.query('SELECT * FROM ShoppingCartItem', (err, results) => {
//     if (err) {
//       console.error('Error fetching shopping cart items:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(results);
//   });
// });

// // POST API for adding a new item to the shopping cart
// // app.post('/cartItems', (request, response) => {
// //   const { productId, quantity } = request.body;
// //   if (!productId || !quantity) {
// //     response.status(400).json({ error: 'Missing required fields' });
// //     return;
// //   }

// //   connection.query(
// //     'INSERT INTO ShoppingCartItem (productId, quantity) VALUES (?, ?)',
// //     [productId, quantity],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error inserting item into shopping cart:', err);
// //         response.status(500).json({ error: 'Internal Server Error' });
// //         return;
// //       }
// //       response.status(201).json({ message: 'Item added to cart successfully', id: result.insertId });
// //     }
// //   );
// // });

// // // PUT API for updating the quantity of an item in the shopping cart
// // app.put('/cartItems/:id', (request, response) => {
// //   const itemId = request.params.id;
// //   const { quantity } = request.body;
// //   if (!quantity) {
// //     response.status(400).json({ error: 'Missing required fields' });
// //     return;
// //   }

// //   connection.query(
// //     'UPDATE ShoppingCartItem SET quantity = ? WHERE id = ?',
// //     [quantity, itemId],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error updating quantity of item in shopping cart:', err);
// //         response.status(500).json({ error: 'Internal Server Error' });
// //         return;
// //       }
// //       response.json({ message: 'Item quantity updated successfully' });
// //     }
// //   );
// // });

// // // DELETE API for removing an item from the shopping cart
// // app.delete('/cartItems/:id', (request, response) => {
// //   const itemId = request.params.id;

// //   connection.query(
// //     'DELETE FROM ShoppingCartItem WHERE id = ?',
// //     [itemId],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Error deleting item from shopping cart:', err);
// //         response.status(500).json({ error: 'Internal Server Error' });
// //         return;
// //       }
// //       response.json({ message: 'Item removed from cart successfully' });
// //     }
// //   );
// // });
// // Simulating request body for POST API
// app.post('/cartItems', (request, response) => {
//   const { productId, quantity } = request.body;

//   // Check if productId and quantity are provided in the request body
//   if (!productId || !quantity) {
//     response.status(400).json({ error: 'Missing required fields' });
//     return;
//   }

//   connection.query(
//     'INSERT INTO ShoppingCartItem (productId, quantity) VALUES (?, ?)',
//     [productId, quantity],
//     (err, result) => {
//       if (err) {
//         console.error('Error inserting item into shopping cart:', err);
//         response.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       response.status(201).json({ message: 'Item added to cart successfully', id: result.insertId });
//     }
//   );
// });


// // Simulating request body for PUT API
// app.put('/cartItems/:id', (request, response) => {
//   const itemId = request.params.id;
//   const quantity = 3; // Replace with the desired quantity for testing

//   connection.query(
//     'UPDATE ShoppingCartItem SET quantity = ? WHERE id = ?',
//     [quantity, itemId],
//     (err, result) => {
//       if (err) {
//         console.error('Error updating quantity of item in shopping cart:', err);
//         response.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       response.json({ message: 'Item quantity updated successfully' });
//     }
//   );
// });

// // Simulating request parameters for DELETE API
// app.delete('/cartItems/:id', (request, response) => {
//   const itemId = 1; // Replace with the desired item ID for testing

//   connection.query(
//     'DELETE FROM ShoppingCartItem WHERE id = ?',
//     [itemId],
//     (err, result) => {
//       if (err) {
//         console.error('Error deleting item from shopping cart:', err);
//         response.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       response.json({ message: 'Item removed from cart successfully' });
//     }
//   );
// });


