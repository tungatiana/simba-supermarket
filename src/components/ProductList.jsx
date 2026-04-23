export default function ProductList({ products }) {
  if (!products) return <p>No products available</p>;

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}