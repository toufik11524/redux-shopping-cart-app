import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import CartItems from './components/Cart/CartItems';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
      
    </div>
  );
}

export default App;
