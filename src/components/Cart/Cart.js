import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();

  return (
    <div className="cartIcon">
      <h3 onClick={()=> {
        navigate('/cart')
      }}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;