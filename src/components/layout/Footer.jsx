import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-teal-600 text-white p-6 mt-auto shadow-inner">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <Link
            to="/about"
            className="hover:text-teal-300 text-lg font-semibold transition-colors duration-200"
          >
            Acerca de
          </Link>
        </div>

        <hr className="border-teal-900 mb-4" />

        <p className="text-sm">&copy; {new Date().getFullYear()} NaturalHub. Todos los derechos reservados.</p>

        <div className="mt-4">
          <Link
            to="/admin"
            className="text-teal-700 hover:text-teal-100 text-xs transition-opacity duration-300 opacity-70"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
