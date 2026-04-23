import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./data/products";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <h2>Products</h2>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;