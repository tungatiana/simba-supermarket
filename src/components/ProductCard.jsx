export default function ProductCard({ product, onAddToCart }) {
  const { name, priceRwf, inStock } = product;

  return (
    <article className="card">
      <h3>{name}</h3>
      <p>RWF {priceRwf}</p>

      {!inStock && <span className="oos">Out of stock</span>}

      <button onClick={() => onAddToCart(product)}>
        Add to cart
      </button>
    </article>
  );
}