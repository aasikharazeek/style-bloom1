import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../utils/api.jsx";
import ProductCard from "./ProductCard.jsx";

export default function FlashSale() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then(data => setProducts(data.slice(-12).reverse())) // latest 8 products
      .catch(console.error);
  }, []);

  return (
    <section className="flash-sale container">
      <h2>Flash Sale</h2>
      <div className="flash-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
