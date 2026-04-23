import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./data/products";
import { useState } from "react";

function App() {
  const [showSpecial, setShowSpecial] = useState(false);

  // Step 7: add-to-cart handler
  const handleAddToCar = (product) => {
    console.log("Added:", product.name);
  };

  return (
    <>
      <Header />
      <Hero />

      <button onClick={() => setShowSpecial(!showSpecial)}>
        Show Today's Special
      </button>

      {showSpecial && (
        <ProductCard
          product={PRODUCTS[0]}
          onAddToCart={handleAddToCart}
        />
      )}

      <h2>Products</h2>

      <div className="product-grid">
        {PRODUCTS.map((product) => (
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