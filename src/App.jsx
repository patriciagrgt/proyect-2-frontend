import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Home/ProductDetails";
import Admin from "./pages/Admin/Admin";
import CreateProduct from "./pages/Admin/CreateProduct";
import EditProduct from "./pages/Admin/EditProduct";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import { getAllProducts } from "./services/ProductService";
import { CartProvider } from "./Context/CartContext";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <CartProvider>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/create" element={<CreateProduct />} />
            <Route path="/admin/edit/:id" element={<EditProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;