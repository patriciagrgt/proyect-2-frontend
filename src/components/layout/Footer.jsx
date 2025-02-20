import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-700 text-white p-6 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <Link
            to="/about"
            className="hover:text-green-300 text-lg font-semibold transition-colors duration-200"
          >
            Acerca de
          </Link>
        </div>

        <hr className="border-green-500 mb-4" />

        <p className="text-sm">&copy; {new Date().getFullYear()} NaturalHub. Todos los derechos reservados.</p>

        <div className="mt-4">
          <Link
            to="/admin"
            className="text-green-900 hover:text-green-500 text-xs transition-opacity duration-300 opacity-70"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
