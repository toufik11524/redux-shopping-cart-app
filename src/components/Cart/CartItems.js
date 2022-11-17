import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />{" "}
          </li>
        ))}
      </ul>
      <button onClick={() => {
        navigate('/');
      }}>Back</button>
    </div>
  );
};

export default CartItems;