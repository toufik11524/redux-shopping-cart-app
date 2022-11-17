import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import CartItems from './components/Cart/CartItems';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div className="App">
      <Header />
      <Products />
      { showCart && <CartItems />}
    </div>
  );
}

export default App;
