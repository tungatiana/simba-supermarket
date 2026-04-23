import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { PRODUCTS } from "./data/products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const [showSpecial, setShowSpecial] = useState(false);
  const [search, setSearch] = useState("");

  const handleAddToCart = (product) => {
    console.log("Added:", product.name);
  };

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero />

      <SearchBar value={search} onChange={setSearch} />

<div className="container">
        <Header />
        <SearchBar value={search} onChange={setSearch} />
        <button>Show Today’s Special</button>
        <ProductList />
</div>


      {showSpecial && (
        <ProductCard product={PRODUCTS[0]} onAddToCart={handleAddToCart} />
      )}

      <h2>Products</h2>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;