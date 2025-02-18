import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/ProductService";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <p className="text-gray-600 mt-2">{product.brand}</p>
      <p className="text-gray-600">{product.capacity} ml</p>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <h2 className="text-lg font-bold mt-4">Ingredientes</h2>
      <p className="text-gray-600">{product.ingredients}</p>
      <button 
        onClick={() => alert("Producto añadido al carrito")} 
        className="bg-green-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-green-600"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductDetails;