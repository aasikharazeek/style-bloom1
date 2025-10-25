import React from "react";
import FlashSale from "../components/FlashSale.jsx";
import CategoryTile from "../components/CategoryTile.jsx";
import "../styles/home.css"; // CSS for home page styling

export default function Home() {
  return (
    <div className="container home-page">
      <h1 className="home-title">Welcome to Style Bloom</h1>

      <div className="categories-grid">
        <CategoryTile title="Men's Clothing" link="/mens-clothing" className="mens-card" />
        <CategoryTile title="Women's Clothing" link="/womens-clothing" className="womens-card" />
      </div>

      <FlashSale />
    </div>
  );
}
