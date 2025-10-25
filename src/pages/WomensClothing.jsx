import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../utils/api.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function WomensClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory("women's clothing")
      .then(data => setProducts(data.reverse())) // latest first
      .catch(console.error);
  }, []);

  return (
    <div className="container category-page">
      <h1>Women's Clothing</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
