import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-gray-600">{product.capacity}</p>
      <p className="text-gray-600">{product.category}</p>
      <div className="mt-3 flex gap-2">
        <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
          Ver Detalles
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;