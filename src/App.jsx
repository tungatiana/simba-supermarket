import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import { PRODUCTS } from "./data/products.js";
import UserForm from "./components/UseForm";

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
      {/* <Header />
      <Hero />

      <SearchBar value={search} onChange={setSearch} />

      <button onClick={() => setShowSpecial(!showSpecial)}>
        Show Today’s Special
      </button>

      {showSpecial && (
        <ProductCard product={PRODUCTS[0]} onAddToCart={handleAddToCart} />
      )}

      <h2>Products</h2>

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      <Footer /> */}
      <UserForm/>
    </>
  );
}

export default App;
