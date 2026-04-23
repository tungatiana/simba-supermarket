export default function ProductCard({ product }) {
  const { name, priceRwf, image, inStock } = product;

  const formattedPrice = new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency: "RWF"
  }).format(priceRwf);

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
      {!inStock && <p style={{ color: "red" }}>Out of stock</p>}
    </div>
  );
}