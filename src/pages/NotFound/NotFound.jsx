import { Link } from "react-router-dom";
import notfound from "../../assets/notfound.png";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-6">
      <img
        src={notfound}
        alt="Página no encontrada"
        className="w-64 h-64 mb-12"
      />

      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">¡Ups! Página no encontrada.</p>

      <Link
        to="/"
        className="bg-teal-900 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition text-lg"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
