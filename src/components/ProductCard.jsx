import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useFavorites } from "../Context/FavoritesContext";
import { toast } from "react-toastify";
import { ShoppingCart, Heart } from "lucide-react";

function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  const handleToggleFavorite = () => {
    const wasAdded = toggleFavorite(product);
    if (wasAdded) {
      toast.success("¡Producto añadido a favoritos!", {
        style: {
          fontSize: "1.2rem",
          padding: "16px",
          width: "420px",
        },
      });
    }
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-left 
                    transition-transform duration-300 hover:scale-105 w-64 h-[420px]">

      {/* Botón Me Gusta */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 text-2xl transition-transform hover:scale-110"
      >
        <Heart size={24} fill={isProductFavorite ? "red" : "none"} stroke={isProductFavorite ? "red" : "currentColor"} />
      </button>

      <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain rounded-md"
        />
        <p className="text-gray-600">{product.brand}</p>
        <h2 className="text-lg font-bold mt-2 text-center">{product.name}</h2>
        <p className="text-neutral-900 font-medium">{product.capacity}</p>
        <p className="font-bold text-teal-700 text-neutral-900 text-xl mt-2">
          {product.price.toString().replace(".", ",")} €
        </p>
      </Link>

      <button
        onClick={() => {
          addToCart(product);
          toast.success("Tu producto se ha añadido al carrito 🎉", {
            style: {
              fontSize: "1.2rem",
              padding: "16px",
              width: "420px",
            },
          });
        }}
        className={`mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-md text-white font-semibold text-lg 
              transition-all cursor-pointer ${isInCart ? "bg-gray-500 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-500"}`}
        disabled={isInCart}
      >
        {isInCart ? "Añadido" : "Añadir"} <ShoppingCart size={20} />
      </button>

    </div>
  );
}

export default ProductCard;