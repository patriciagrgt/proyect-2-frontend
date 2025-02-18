import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Cosmética Natural
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-green-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-green-300">
              Crear Producto
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-300">
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;