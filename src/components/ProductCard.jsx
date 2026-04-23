export default function ProductCard({ product, onAddToCart }) {
  const { name, priceRwf, inStock } = product;

  return (
    <article className="card">
      <h3>{name}</h3>
      <p>RWF {priceRwf}</p>

    {product.inStock ? (
  <button>Add to cart</button>
) : (
  <button disabled>Out of stock</button>
)}

      <button onClick={() => onAddToCart(product)}>
        Add to cart
      </button>
    </article>
  );
}