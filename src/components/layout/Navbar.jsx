import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { Home, ShoppingCart, Heart } from "lucide-react";
import logo from "../../assets/logo.png";

function Navbar() {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  return (
    <nav className="bg-teal-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-8">
        <Link to="/" className="flex items-center text-xl font-bold space-x-2">
          <img src={logo} alt="Logo NaturalHub" className="h-16 w-16 rounded-full" />
          <span className="text-3xl kaushan-script-regular">NaturalHub</span>
        </Link>

        <ul className="flex space-x-10 items-center">
          <li>
            <Link
              to="/"
              className="hover:text-teal-300 transition-colors duration-200 flex items-center"
            >
              <Home size={28} />
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="relative hover:text-teal-300 transition-colors duration-200"
            >
              <Heart size={28} fill={favorites.length > 0 ? "white" : "none"} />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                  {favorites.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative hover:text-teal-300 transition-colors duration-200"
            >
              <ShoppingCart size={28} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;