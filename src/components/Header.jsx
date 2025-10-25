import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../context/GlobalState.jsx";

export default function Header() {
  const { cart } = useGlobal();

  return (
    <header className="header">
      <div className="container header-container">
        {/* Add a class for animation and styling */}
        <Link to="/" className="logo animate">Style Bloom</Link>

        <nav>
          <Link to="/mens-clothing">Men's Clothing</Link>
          <Link to="/womens-clothing">Women's Clothing</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
      </div>
    </header>
  );
}
