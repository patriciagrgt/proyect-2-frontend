import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

function Navbar() {
  const { cart } = useCart(); // Obtén el carrito del contexto

  return (
    <nav className="bg-green-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Cosmética Natural
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/" className="hover:text-green-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative hover:text-green-300">
              🛒 Carrito
              {cart.length > 0 && ( // Muestra el indicador solo si hay productos
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 transform translate-x-1/2 -translate-y-1/2">
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