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
import Favorites from "./pages/Favorites/Favorites"; // Importamos la nueva página
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import { getAllProducts } from "./services/ProductService";
import { CartProvider } from "./Context/CartContext";
import { FavoritesProvider } from "./Context/FavoritesContext"; // Importamos el provider

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="flex flex-col min-h-screen">
          <ToastContainer position="top-center" autoClose={2000} />

          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/create" element={<CreateProduct />} />
              <Route path="/admin/edit/:id" element={<EditProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} /> {/* Nueva ruta */}
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;