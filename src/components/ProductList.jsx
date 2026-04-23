export default function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}