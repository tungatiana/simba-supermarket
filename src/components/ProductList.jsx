import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}