<div className="product-grid">
  {products.map((product) => (
    <Product key={product.id} product={product} />
  ))}
</div>