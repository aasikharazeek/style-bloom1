import React from "react";
import { useGlobal } from "../context/GlobalState.jsx";
import "../styles/cart.css"; // Separate CSS for cart

export default function Cart() {
  const { cart, removeFromCart } = useGlobal();

  if (cart.length === 0)
    return (
      <div className="container">
        <h2 className="empty-cart">Your cart is empty</h2>
      </div>
    );

  return (
    <div className="container cart-page">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="info">
              <h3>{item.title}</h3>
              <p className="price">Rs {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
