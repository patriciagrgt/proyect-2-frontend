import { useState } from "react";
import ProductList from "../../components/ProductList";

function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Obtener categorías únicas
  const categories = [...new Set(products.map((product) => product.category))];

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Contenedor del título y el filtro en la misma línea */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Productos Destacados</h1>

        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de productos */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;
