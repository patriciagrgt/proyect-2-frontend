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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Inventario</h1>
      <Link
        to="/admin/create"
        className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-500 mb-6 inline-block cursor-pointer"
      >
        Agregar producto +
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="py-3 px-6 text-left">Imagen</th>
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Marca</th>
              <th className="py-3 px-6 text-left">Capacidad</th>
              <th className="py-3 px-6 text-left">Categoría</th>
              <th className="py-3 px-6 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded-md" />
                </td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6">{product.brand}</td>
                <td className="py-3 px-6">{product.capacity} ml</td>
                <td className="py-3 px-6">{product.category}</td>
                <td className="py-3 px-6 flex justify-center space-x-2">
                  <Link
                    to={`/admin/edit/${product.id}`}
                    className="bg-slate-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 cursor-pointer"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 cursor-pointer"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;