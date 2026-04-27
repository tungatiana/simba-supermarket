import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  if (!products) return null;
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
