const BASE = 'https://fakestoreapi.com';

export async function fetchAllProducts() {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductsByCategory(category) {
  const res = await fetch(`${BASE}/products/category/${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error('Failed to fetch category');
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}
