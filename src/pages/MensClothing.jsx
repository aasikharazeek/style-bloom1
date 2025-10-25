import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../utils/api.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function MensClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory("men's clothing")
      .then(data => setProducts(data.reverse())) // latest first
      .catch(console.error);
  }, []);

  return (
    <div className="container category-page">
      <h1>Men's Clothing</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
