import { useState, useEffect } from "react";
import { products } from "./data/products";
import Navvbar from "./components/Navvbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import Delivery from "./components/Delivery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div id="top">
      <Navvbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
      />

      <main className="container py-4">
        <Hero />

        <About />

        {/* MENU */}
        <section id="menu" className="section-block py-5">
          <div className="text-center mb-4">
            <span className="badge bg-harra mb-3">Notre menu</span>
            <h2 className="fw-bold display-6">
              Choisis ton <span className="text-harra">niveau de feu</span>
            </h2>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold m-0">
              {selectedCategory === "All" ? "Tous les plats" : selectedCategory}
            </h4>
            <small className="text-muted">{filteredProducts.length} produits</small>
          </div>

          <CategoryFilter
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

          {filteredProducts.length === 0 ? (
            <p className="text-center text-muted py-5">
              <i className="fa-regular fa-face-frown me-2"></i>
              Aucun plat trouvé
            </p>
          ) : (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </section>

        <Delivery />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;