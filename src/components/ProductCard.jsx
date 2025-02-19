import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto

  const [liked, setLiked] = useState(false); // Estado para el "me gusta"

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col items-center text-left">
      <Link to={`/product/${product.id}`} >
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-md" />
        <p className="text-gray-600">{product.brand}</p>
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-neutral-900 text-left font-medium">{product.capacity} </p>
        <p className="font-bold text-neutral-900 text-xl mt-4">{product.price} €</p>
      </Link>
        
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => addToCart(product)} // Añade el producto al carrito
          className="btn-block bg-green-900 text-white px-10 py-1 rounded-md hover:bg-green-600 transition cursor-pointer"
        >
          Añadir 🛒
        </button>
        <button
          onClick={toggleLike}
          className={`px-4 py-2 rounded-lg border-2 transition ${liked ? "bg-red-100 border-red-500 text-red-500" : "bg-white border-gray-300 text-gray-400"}`}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

    </div>
  );
}

export default ProductCard;


