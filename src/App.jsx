import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import EditProduct from "./pages/EditProduct/EditProduct";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import { getAllProducts } from "./services/ProductService";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home products={products} setProducts={setProducts} />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;