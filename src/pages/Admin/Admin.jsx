import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/ProductService";

function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id)); // Actualiza la lista
        alert("Producto eliminado exitosamente");
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Administración de Productos</h1>
      <Link
        to="/admin/create"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4 inline-block"
      >
        Crear Nuevo Producto
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-gray-600">{product.capacity} ml</p>
            <p className="text-gray-600">{product.category}</p>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/admin/edit/${product.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;