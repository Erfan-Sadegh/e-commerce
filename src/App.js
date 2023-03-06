import React, { useEffect, useState } from 'react';
import { Navbar, Products } from './components';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/productsList');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  function handleAddToCart(newItem) {
    const existingItem = cart.find(
      (item) => item.product.id === newItem.product.id
    );

    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = cart.map((item) => {
        return item.id === existingItem.id ? { ...item } : item;
      });

      setCart(updatedCart);
    } else {
      // Otherwise, add the item to the cart
      setCart([
        ...cart,
        { ...newItem, quantity: 1, price: newItem.product.price },
      ]);
    }
  }

  return (
    <>
      <Navbar totalItems={cart.length} />
      {products.length ? (
        <Routes>
          <Route
            path='/'
            exact
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path='/cart'
            exact
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      ) : (
        <div
          style={{
            display: 'grid',
            placeContent: 'center',
            minHeight: '100vh',
          }}
        >
          Loading ...
        </div>
      )}
    </>
  );
}
