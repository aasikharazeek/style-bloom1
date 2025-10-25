import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api.jsx';
import { useGlobal } from '../context/GlobalState.jsx';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useGlobal();

  useEffect(() => {
    fetchProductById(id).then(setProduct).catch(console.error);
  }, [id]);

  if (!product) return <div className="container">Loading...</div>;

  return (
    <div className="container product-page">
      <div className="product-grid">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">Rs {product.price}</p>
          <p className="desc">{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
