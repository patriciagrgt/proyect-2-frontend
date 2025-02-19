import { useState } from "react";
import ProductList from "../../components/ProductList";

function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Obtener todas las categorías únicas de los productos
  const categories = [...new Set(products.map((product) => product.category))];

  // Filtrar productos por categoría seleccionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Productos Destacados</h1>

      {/* Select para filtrar por categoría */}
      <div className="text-left mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Filtrar por categoría:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-1 p-2 border rounded-md"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        </div>
    

      {/* Lista de productos filtrados */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;